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

class AppToggle extends LitElement {
  static properties = {
    pressed: { type: Boolean },
    disabled: { type: Boolean },
  }

  constructor() {
    super()
    this.pressed = false
    this.disabled = false
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: 1;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast), opacity var(--transition-fast), box-shadow var(--transition-fast);
      border: none;
      white-space: nowrap;
      background-color: transparent;
      color: var(--color-text-secondary);
    }

    button:hover:not(:disabled) {
      color: var(--color-text);
      background-color: var(--color-bg-secondary);
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    button[aria-pressed="true"] {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
      font-weight: var(--font-weight-semibold);
    }

    button[aria-pressed="true"]:hover:not(:disabled) {
      background-color: var(--color-border);
    }
  `

  render() {
    return html`<button type="button" ?disabled="${this.disabled}" aria-pressed="${this.pressed}" part="button"><slot></slot></button>`
  }
}

customElements.define('app-toggle', AppToggle)
