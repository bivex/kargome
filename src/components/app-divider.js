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

class AppDivider extends LitElement {
  static properties = {
    label: { type: String },
  }

  constructor() {
    super()
    this.label = ''
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .divider {
      display: flex;
      align-items: center;
      width: 100%;
      gap: var(--space-4);
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: var(--color-border);
    }

    .label {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-secondary);
      white-space: nowrap;
    }

    :host(:not([label])) .label {
      display: none;
    }

    :host(:not([label])) .divider::before {
      display: none;
    }

    :host(:not([label])) .divider::after {
      flex: 1;
    }
  `

  render() {
    return html`
      <div class="divider" part="divider">
        ${this.label ? html`<span class="label" part="label">${this.label}</span>` : ''}
      </div>
    `
  }
}

customElements.define('app-divider', AppDivider)
