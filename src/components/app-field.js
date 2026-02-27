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

class AppField extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    error: { type: Boolean },
  }

  constructor() {
    super()
    this.disabled = false
    this.error = false
  }

  static styles = css`
    :host {
      display: block;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .label {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      line-height: var(--line-height-tight);
    }

    :host([disabled]) .label {
      color: var(--color-text-secondary);
      opacity: 0.6;
    }

    ::slotted(*) {
      width: 100%;
    }

    .description {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      line-height: var(--line-height-base);
    }

    .error {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: var(--font-size-xs);
      color: var(--color-fill-red);
      line-height: var(--line-height-base);
    }

    .error::before {
      content: '!';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: var(--radius-full);
      background-color: var(--color-fill-red);
      color: white;
      font-size: 10px;
      font-weight: var(--font-weight-bold);
    }
  `

  render() {
    return html`
      <div class="field" part="field">
        <slot name="label" part="label">
          <span class="label"><slot></slot></span>
        </slot>
        <slot part="input"></slot>
        <slot name="description" part="description">
          <div class="description">
            <slot name="description"></slot>
          </div>
        </slot>
        ${this.error ? html`
          <div class="error" part="error">
            <slot name="error"></slot>
          </div>
        ` : ''}
      </div>
    `
  }
}

customElements.define('app-field', AppField)
