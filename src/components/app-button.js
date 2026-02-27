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

class AppButton extends LitElement {
  static properties = {
    variant: { type: String },
    disabled: { type: Boolean },
    href: { type: String },
  }

  constructor() {
    super()
    this.variant = 'primary'
    this.disabled = false
    this.href = ''
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    button, a {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast), opacity var(--transition-fast);
      border: none;
      white-space: nowrap;
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* primary */
    :host([variant="primary"]) button,
    :host([variant="primary"]) a {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
    }

    :host([variant="primary"]) button:hover:not(:disabled),
    :host([variant="primary"]) a:hover {
      background-color: var(--color-accent-hover);
    }

    /* secondary */
    :host([variant="secondary"]) button,
    :host([variant="secondary"]) a {
      background-color: transparent;
      color: var(--color-accent);
      box-shadow: inset 0 0 0 1px var(--color-accent);
    }

    :host([variant="secondary"]) button:hover:not(:disabled),
    :host([variant="secondary"]) a:hover {
      background-color: color-mix(in srgb, var(--color-accent) 8%, transparent);
    }

    /* ghost */
    :host([variant="ghost"]) button,
    :host([variant="ghost"]) a {
      background-color: transparent;
      color: var(--color-text-secondary);
    }

    :host([variant="ghost"]) button:hover:not(:disabled),
    :host([variant="ghost"]) a:hover {
      color: var(--color-text);
      background-color: var(--color-bg-secondary);
    }
  `

  render() {
    if (this.href) {
      return html`<a href="${this.href}" part="button"><slot></slot></a>`
    }
    return html`<button type="button" ?disabled="${this.disabled}" part="button"><slot></slot></button>`
  }
}

customElements.define('app-button', AppButton)
