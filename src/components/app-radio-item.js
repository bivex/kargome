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

class AppRadioItem extends LitElement {
  static properties = {
    value: { type: String },
    checked: { type: Boolean, reflect: true },
    name: { type: String },
  }

  constructor() {
    super()
    this.value = ''
    this.checked = false
    this.name = ''
  }

  static styles = css`
    :host {
      display: contents;
    }

    input {
      display: none;
    }

    .radio-visual {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-full);
      background-color: var(--color-bg);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    :host([checked]) .radio-visual {
      border-color: var(--color-accent);
      background-color: var(--color-bg);
    }

    :host([checked]) .radio-visual::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: var(--radius-full);
      background-color: var(--color-accent);
    }

    input:not([disabled]) + .radio-visual:hover {
      border-color: var(--color-accent);
    }

    input:disabled ~ * {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  render() {
    return html`
      <label style="display:inline-flex;align-items:center;gap:var(--space-2);cursor:pointer">
        <input
          type="radio"
          .name=${this.name}
          .value=${this.value}
          .checked=${this.checked}
          @change=${(e) => {
            this.checked = e.target.checked
            this.dispatchEvent(new CustomEvent('change', {
              detail: { value: this.value, checked: e.target.checked },
              bubbles: true,
              composed: true
            }))
          }}
        />
        <span class="radio-visual"></span>
        <slot></slot>
      </label>
    `
  }
}

customElements.define('app-radio-item', AppRadioItem)
