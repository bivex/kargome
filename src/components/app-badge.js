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

class AppBadge extends LitElement {
  static properties = {
    variant: { type: String },
    dot: { type: Boolean, reflect: true },
  }

  constructor() {
    super()
    this.variant = 'default'
    this.dot = false
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-full);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      line-height: 1;
      white-space: nowrap;
    }

    :host([dot]) {
      width: 8px;
      height: 8px;
      min-width: 8px;
      min-height: 8px;
      padding: 0;
      border-radius: var(--radius-full);
    }

    :host([dot]) slot {
      display: none;
    }

    /* default */
    :host([variant="default"]) {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    /* secondary */
    :host([variant="secondary"]) {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
    }

    /* outline */
    :host([variant="outline"]) {
      background-color: transparent;
      color: var(--color-text-secondary);
      box-shadow: inset 0 0 0 1px var(--color-border);
    }

    /* destructive */
    :host([variant="destructive"]) {
      background-color: var(--color-fill-red);
      color: var(--color-btn-primary-text);
    }

    :host([dot][variant="default"]) {
      background-color: var(--color-text-secondary);
    }

    :host([dot][variant="secondary"]) {
      background-color: var(--color-accent);
    }

    :host([dot][variant="outline"]) {
      background-color: var(--color-border);
      box-shadow: none;
    }

    :host([dot][variant="destructive"]) {
      background-color: var(--color-fill-red);
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('app-badge', AppBadge)
