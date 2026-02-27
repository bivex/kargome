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

class AppTextarea extends LitElement {
  static properties = {
    placeholder: { type: String },
    value: { type: String },
    disabled: { type: Boolean },
    error: { type: Boolean },
    rows: { type: Number },
    resizable: { type: Boolean },
  }

  constructor() {
    super()
    this.placeholder = ''
    this.value = ''
    this.disabled = false
    this.error = false
    this.rows = 3
    this.resizable = true
  }

  static styles = css`
    :host {
      display: block;
    }

    textarea {
      display: block;
      width: 100%;
      padding: var(--space-3);
      border-radius: var(--radius-md);
      font-size: var(--font-size-base);
      line-height: var(--line-height-normal);
      color: var(--color-text);
      background-color: var(--color-bg-input);
      border: 1px solid var(--color-border);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      box-sizing: border-box;
      font-family: inherit;
    }

    textarea::placeholder {
      color: var(--color-text-placeholder);
    }

    textarea:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px var(--color-focus-ring);
    }

    textarea:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--color-bg-disabled);
    }

    textarea:not(:disabled):hover {
      border-color: var(--color-border-hover);
    }

    :host([resizable="false"]) textarea {
      resize: none;
    }

    :host([resizable="true"]) textarea {
      resize: vertical;
    }

    :host([error="true"]) textarea {
      border-color: var(--color-error);
    }

    :host([error="true"]) textarea:focus {
      border-color: var(--color-error);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-error) 25%, transparent);
    }
  `

  render() {
    return html`
      <textarea
        part="textarea"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        ?disabled="${this.disabled}"
        rows="${this.rows}"
        @input="${this._handleInput}"
      ></textarea>
    `
  }

  _handleInput(e) {
    this.value = e.target.value
    this.dispatchEvent(new CustomEvent('input', { detail: { value: this.value } }))
  }
}

customElements.define('app-textarea', AppTextarea)
