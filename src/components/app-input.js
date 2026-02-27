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

class AppInput extends LitElement {
  static properties = {
    type: { type: String },
    placeholder: { type: String },
    value: { type: String },
    disabled: { type: Boolean },
    error: { type: Boolean },
    size: { type: String },
  }

  constructor() {
    super()
    this.type = 'text'
    this.placeholder = ''
    this.value = ''
    this.disabled = false
    this.error = false
    this.size = 'md'
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    input {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      font-size: var(--font-size-base);
      font-family: var(--font-family);
      color: var(--color-text);
      background-color: var(--color-bg);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      outline: none;
    }

    input::placeholder {
      color: var(--color-text-secondary);
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
    }

    input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--color-bg-secondary);
    }

    :host([error="true"]) input {
      border-color: var(--color-fill-red);
    }

    :host([error="true"]) input:focus {
      border-color: var(--color-fill-red);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-fill-red) 20%, transparent);
    }

    /* sm */
    :host([size="sm"]) input {
      padding: var(--space-1) var(--space-2);
      font-size: var(--font-size-sm);
      border-radius: var(--radius-sm);
    }

    /* md - default, already set above */

    /* lg */
    :host([size="lg"]) input {
      padding: var(--space-4) var(--space-6);
      font-size: var(--font-size-lg);
      border-radius: var(--radius-lg);
    }
  `

  render() {
    return html`
      <div class="input-wrapper">
        <input
          type="${this.type}"
          .placeholder="${this.placeholder}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @input="${this._handleInput}"
          part="input"
        />
      </div>
    `
  }

  _handleInput(e) {
    this.value = e.target.value
    this.dispatchEvent(new CustomEvent('input-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }))
  }
}

customElements.define('app-input', AppInput)
