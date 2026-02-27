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

class AppNativeSelect extends LitElement {
  static properties = {
    value: { type: String },
    disabled: { type: Boolean },
    error: { type: Boolean },
  }

  constructor() {
    super()
    this.value = ''
    this.disabled = false
    this.error = false
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .wrapper {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    select {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border);
      background-color: var(--color-bg);
      color: var(--color-text);
      font-size: var(--font-size-sm);
      font-family: var(--font-family);
      line-height: var(--line-height-base);
      cursor: pointer;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      appearance: none;
      padding-right: var(--space-8);
    }

    select:hover:not(:disabled) {
      border-color: var(--color-accent);
    }

    select:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent);
    }

    select:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      background-color: var(--color-bg-secondary);
    }

    :host([error]) .wrapper select {
      border-color: var(--color-fill-red);
    }

    :host([error]) .wrapper select:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-fill-red) 25%, transparent);
    }

    .wrapper::after {
      content: '';
      position: absolute;
      right: var(--space-4);
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid var(--color-text-secondary);
      pointer-events: none;
    }
  `

  render() {
    return html`
      <div class="wrapper">
        <select
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
          part="select"
        >
          <slot></slot>
        </select>
      </div>
    `
  }

  _handleChange(e) {
    this.value = e.target.value
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    )
  }
}

customElements.define('app-native-select', AppNativeSelect)
