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

class AppToggleGroup extends LitElement {
  static properties = {
    value: { type: String },
    multiple: { type: Boolean },
  }

  constructor() {
    super()
    this.value = ''
    this.multiple = false
  }

  static styles = css`
    :host {
      display: inline-flex;
      gap: var(--space-2);
      padding: var(--space-1);
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-full);
    }

    .toggle-button {
      display: inline-flex;
      align-items: center;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: 1;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      border: none;
      white-space: nowrap;
      background-color: transparent;
      color: var(--color-text-secondary);
    }

    .toggle-button:hover {
      color: var(--color-text);
      background-color: color-mix(in srgb, var(--color-text) 8%, transparent);
    }

    .toggle-button.selected {
      background-color: var(--color-bg);
      color: var(--color-accent);
      box-shadow: var(--shadow-sm);
    }
  `

  render() {
    const slots = this.querySelectorAll('slot:not([name]) > *, ::slotted(*)')
    return html`
      <div class="toggle-group" part="toggle-group">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `
  }

  _handleSlotChange() {
    const buttons = this._getButtons()
    buttons.forEach((button, index) => {
      const value = button.getAttribute('value') || String(index)
      button.classList.toggle('selected', this._isSelected(value))
      button.classList.add('toggle-button')
      button.addEventListener('click', () => this._handleClick(value))
    })
  }

  _getButtons() {
    return Array.from(this.children).filter(
      child => child.tagName === 'BUTTON' || child.getAttribute('role') === 'button'
    )
  }

  _isSelected(value) {
    if (this.multiple) {
      return this.value ? this.value.split(',').includes(value) : false
    }
    return this.value === value
  }

  _handleClick(value) {
    let newValue

    if (this.multiple) {
      const values = this.value ? this.value.split(',') : []
      const index = values.indexOf(value)

      if (index === -1) {
        values.push(value)
      } else {
        values.splice(index, 1)
      }

      newValue = values.join(',')
    } else {
      newValue = value
    }

    this.value = newValue
    this._handleSlotChange()

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: newValue },
        bubbles: true,
        composed: true,
      })
    )
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('value') || changedProperties.has('multiple')) {
      this._handleSlotChange()
    }
  }
}

customElements.define('app-toggle-group', AppToggleGroup)
