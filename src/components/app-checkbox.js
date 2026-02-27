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

class AppCheckbox extends LitElement {
  static properties = {
    checked: { type: Boolean, reflect: true },
    indeterminate: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    name: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.checked = false
    this.indeterminate = false
    this.disabled = false
    this.value = ''
    this.name = ''
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      cursor: pointer;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .checkbox-wrapper {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    .checkbox-visual {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-sm);
      background-color: var(--color-bg);
      transition: background-color var(--transition-fast), border-color var(--transition-fast);
    }

    :host(:hover:not([disabled])) .checkbox-visual {
      border-color: var(--color-accent);
    }

    input[type="checkbox"]:focus-visible ~ .checkbox-visual {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }

    :host([checked]) .checkbox-visual,
    :host([indeterminate]) .checkbox-visual {
      background-color: var(--color-accent);
      border-color: var(--color-accent);
    }

    .checkbox-visual svg {
      width: 12px;
      height: 12px;
      stroke: var(--color-btn-primary-text);
      stroke-width: 2.5;
      fill: none;
      display: none;
    }

    :host([checked]) .checkbox-visual svg.check-icon,
    :host([indeterminate]) .checkbox-visual svg.indeterminate-icon {
      display: block;
    }

    .label {
      font-size: var(--font-size-base);
      line-height: var(--line-height-base);
      color: var(--color-text);
      user-select: none;
    }

    :host([disabled]) .label {
      color: var(--color-text-secondary);
    }
  `

  render() {
    return html`
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          ?checked="${this.checked}"
          ?indeterminate="${this.indeterminate}"
          ?disabled="${this.disabled}"
          .value="${this.value}"
          .name="${this.name}"
          @change="${this._handleChange}"
          part="input"
        >
        <span class="checkbox-visual" part="visual">
          <svg class="check-icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <svg class="indeterminate-icon" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
        <span class="label" part="label">
          <slot></slot>
        </span>
      </label>
    `
  }

  _handleChange(event) {
    this.checked = event.target.checked
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        checked: this.checked,
        value: this.value,
      },
      bubbles: true,
      composed: true,
    }))
  }
}

customElements.define('app-checkbox', AppCheckbox)
