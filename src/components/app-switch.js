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

class AppSwitch extends LitElement {
  static properties = {
    checked: { type: Boolean },
    disabled: { type: Boolean },
    name: { type: String },
    value: { type: String },
    size: { type: String },
  }

  constructor() {
    super()
    this.checked = false
    this.disabled = false
    this.name = ''
    this.value = ''
    this.size = 'md'
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .switch {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      position: relative;
    }

    .switch:has(input:disabled) {
      opacity: 0.4;
      cursor: not-allowed;
    }

    input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      pointer-events: none;
    }

    .track {
      position: relative;
      display: inline-block;
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-full);
      transition: background-color var(--transition-fast);
    }

    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      background-color: var(--color-surface-inverse);
      border-radius: 50%;
      transition: transform var(--transition-fast);
      box-shadow: var(--shadow-sm);
    }

    :host([size="sm"]) .track {
      width: 32px;
      height: 18px;
    }

    :host([size="sm"]) .thumb {
      width: 14px;
      height: 14px;
    }

    :host([size="sm"]) input:checked + .track .thumb {
      transform: translateX(14px);
    }

    :host([size="md"]) .track {
      width: 44px;
      height: 24px;
    }

    :host([size="md"]) .thumb {
      width: 20px;
      height: 20px;
    }

    :host([size="md"]) input:checked + .track .thumb {
      transform: translateX(20px);
    }

    :host([size="lg"]) .track {
      width: 56px;
      height: 30px;
    }

    :host([size="lg"]) .thumb {
      width: 26px;
      height: 26px;
    }

    :host([size="lg"]) input:checked + .track .thumb {
      transform: translateX(24px);
    }

    input:checked + .track {
      background-color: var(--color-accent);
    }

    input:checked + .track .thumb {
      background-color: var(--color-btn-primary-text);
    }

    input:focus-visible + .track {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  `

  render() {
    return html`
      <label class="switch">
        <input
          type="checkbox"
          .name="${this.name}"
          .value="${this.value}"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this._handleChange}"
        >
        <span class="track">
          <span class="thumb"></span>
        </span>
      </label>
    `
  }

  _handleChange(e) {
    this.checked = e.target.checked
    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked, value: this.value },
      bubbles: true,
      composed: true,
    }))
  }
}

customElements.define('app-switch', AppSwitch)
