/**
 * Copyright (c) 2026 Bivex
 *
 * Author: Bivex
 * Available for contact via email: support@b-b.top
 * For up-to-date contact information:
 * https://github.com/bivex
 *
 * Created: 2026-02-27 20:47
 * Last Updated: 2026-02-27 20:47
 *
 * Licensed under the MIT License.
 * Commercial licensing available upon request.
 */

import { LitElement, html, css } from 'lit'

class AppInputOtp extends LitElement {
  static properties = {
    value: { type: String },
    length: { type: Number },
    separator: { type: String },
  }

  constructor() {
    super()
    this.value = ''
    this.length = 6
    this.separator = ''
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
    }

    .otp-input {
      width: 3rem;
      height: 3.75rem;
      text-align: center;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-medium);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      background-color: var(--color-bg);
      color: var(--color-text);
      outline: none;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }

    .otp-input:focus {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent);
    }

    .otp-input:hover:not(:focus) {
      border-color: var(--color-accent-hover);
    }

    .separator {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      font-weight: var(--font-weight-medium);
      user-select: none;
    }
  `

  #inputs = []

  render() {
    const digits = this.value.padEnd(this.length, '').split('').slice(0, this.length)
    const showSeparator = this.separator && this.length > 3

    return html`
      ${digits.map((digit, index) => {
        const inputIndex = index
        if (showSeparator && index === Math.floor(this.length / 2)) {
          return html`<span class="separator">${this.separator}</span>${this.#renderInput(digit, inputIndex)}`
        }
        return this.#renderInput(digit, inputIndex)
      })}
    `
  }

  #renderInput(digit, index) {
    return html`
      <input
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="1"
        class="otp-input"
        .value="${digit}"
        @input="${(e) => this.#handleInput(e, index)}"
        @keydown="${(e) => this.#handleKeydown(e, index)}"
        @focus="${(e) => e.target.select()}"
        @paste="${(e) => this.#handlePaste(e)}"
      />
    `
  }

  #handleInput(event, index) {
    const input = event.target
    const value = input.value.replace(/[^0-9]/g, '')

    if (value) {
      const chars = this.value.split('')
      chars[index] = value
      this.value = chars.join('')

      if (index < this.length - 1) {
        this.#focusInput(index + 1)
      }
    } else {
      const chars = this.value.split('')
      chars[index] = ''
      this.value = chars.join('')
    }

    this.#dispatchChange()
  }

  #handleKeydown(event, index) {
    if (event.key === 'Backspace' && !event.target.value && index > 0) {
      this.#focusInput(index - 1)
    } else if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault()
      this.#focusInput(index - 1)
    } else if (event.key === 'ArrowRight' && index < this.length - 1) {
      event.preventDefault()
      this.#focusInput(index + 1)
    }
  }

  #handlePaste(event) {
    event.preventDefault()
    const pasteData = event.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, this.length)

    if (pasteData) {
      this.value = pasteData.padEnd(this.length, '')
      this.#focusInput(Math.min(pasteData.length, this.length - 1))
      this.#dispatchChange()
    }
  }

  #focusInput(index) {
    const inputs = this.shadowRoot.querySelectorAll('.otp-input')
    const input = inputs[index]
    if (input) {
      input.focus()
    }
  }

  #dispatchChange() {
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }))
  }
}

customElements.define('app-input-otp', AppInputOtp)
