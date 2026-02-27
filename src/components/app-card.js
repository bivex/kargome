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

class AppCard extends LitElement {
  static properties = {
    variant: { type: String },
  }

  constructor() {
    super()
    this.variant = 'default'
  }

  static styles = css`
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      border-radius: var(--radius-lg);
      overflow: hidden;
      transition: box-shadow var(--transition-fast);
    }

    .card-header {
      padding: var(--space-6);
      border-bottom: 1px solid var(--color-border);
    }

    .card-body {
      padding: var(--space-6);
      flex: 1;
    }

    .card-footer {
      padding: var(--space-6);
      border-top: 1px solid var(--color-border);
    }

    /* default */
    :host([variant="default"]) .card {
      background-color: var(--color-bg);
      box-shadow: var(--shadow-sm);
    }

    /* bordered */
    :host([variant="bordered"]) .card {
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      box-shadow: none;
    }

    /* elevated */
    :host([variant="elevated"]) .card {
      background-color: var(--color-bg);
      box-shadow: var(--shadow-md);
    }

    :host([variant="elevated"]) .card:hover {
      box-shadow: var(--shadow-lg);
    }
  `

  render() {
    return html`
      <div class="card" part="card">
        <div class="card-header" part="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body" part="card-body">
          <slot></slot>
        </div>
        <div class="card-footer" part="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `
  }
}

customElements.define('app-card', AppCard)
