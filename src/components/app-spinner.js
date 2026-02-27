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

class AppSpinner extends LitElement {
  static properties = {
    size: { type: String },
    label: { type: String },
  }

  constructor() {
    super()
    this.size = 'md'
    this.label = 'Loading...'
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .spinner {
      display: block;
      border-radius: var(--radius-full);
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    /* xs */
    :host([size="xs"]) .spinner {
      width: 12px;
      height: 12px;
      border-width: 2px;
    }

    /* sm */
    :host([size="sm"]) .spinner {
      width: 16px;
      height: 16px;
      border-width: 2px;
    }

    /* md */
    :host([size="md"]) .spinner {
      width: 24px;
      height: 24px;
      border-width: 3px;
    }

    /* lg */
    :host([size="lg"]) .spinner {
      width: 32px;
      height: 32px;
      border-width: 3px;
    }

    /* xl */
    :host([size="xl"]) .spinner {
      width: 48px;
      height: 48px;
      border-width: 4px;
    }

    .spinner {
      border-style: solid;
      border-color: var(--color-border);
      border-top-color: var(--color-accent);
    }
  `

  render() {
    return html`
      <div class="spinner" role="status" aria-label="${this.label}">
        <span class="sr-only">${this.label}</span>
      </div>
    `
  }
}

customElements.define('app-spinner', AppSpinner)
