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

class AppAlert extends LitElement {
  static properties = {
    variant: { type: String },
    dismissible: { type: Boolean },
    _open: { state: true },
  }

  constructor() {
    super()
    this.variant = 'info'
    this.dismissible = false
    this._open = true
  }

  static styles = css`
    :host {
      display: block;
    }

    .alert {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      padding: var(--space-4);
      border-radius: var(--radius-md);
      border-left: 4px solid;
      background-color: var(--color-bg-secondary);
      transition: opacity var(--transition-fast);
    }

    .alert:not([open]) {
      display: none;
    }

    .icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }

    .content {
      flex: 1;
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
      color: var(--color-text);
    }

    .close-button {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--color-text-secondary);
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .close-button:hover {
      background-color: var(--color-bg);
      color: var(--color-text);
    }

    /* info variant */
    :host([variant="info"]) .alert {
      border-left-color: var(--color-fill-blue);
    }

    :host([variant="info"]) .icon {
      color: var(--color-fill-blue);
    }

    /* success variant */
    :host([variant="success"]) .alert {
      border-left-color: var(--color-fill-green);
    }

    :host([variant="success"]) .icon {
      color: var(--color-fill-green);
    }

    /* warning variant */
    :host([variant="warning"]) .alert {
      border-left-color: var(--color-accent);
    }

    :host([variant="warning"]) .icon {
      color: var(--color-accent);
    }

    /* error variant */
    :host([variant="error"]) .alert {
      border-left-color: var(--color-fill-red);
    }

    :host([variant="error"]) .icon {
      color: var(--color-fill-red);
    }
  `

  _getIcon() {
    const icons = {
      info: html`
        <svg class="icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM9 10C8.44772 10 8 10.4477 8 11V14C8 14.5523 8.44772 15 9 15H11C11.5523 15 12 14.5523 12 14V11C12 10.4477 11.5523 10 11 10H9Z"/>
        </svg>
      `,
      success: html`
        <svg class="icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.00002 13.4142L4.5858 10L5.99998 8.58579L8.00002 10.5858L14 4.58579L15.4142 6L8.00002 13.4142Z"/>
        </svg>
      `,
      warning: html`
        <svg class="icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9 5H11V12H9V5ZM9 13H11V15H9V13Z"/>
        </svg>
      `,
      error: html`
        <svg class="icon" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.00002 8C8.00002 7.44772 8.44774 7 9.00002 7H11C11.5523 7 12 7.44772 12 8C12 8.55228 11.5523 9 11 9H9.00002C8.44774 9 8.00002 8.55228 8.00002 8ZM8.00002 11C8.00002 10.4477 8.44774 10 9.00002 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H9.00002C8.44774 12 8.00002 11.5523 8.00002 11Z"/>
        </svg>
      `,
    }
    return icons[this.variant] || icons.info
  }

  _dismiss() {
    this._open = false
    this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true, composed: true }))
  }

  render() {
    if (!this._open) {
      return html``
    }

    return html`
      <div class="alert" part="alert">
        ${this._getIcon()}
        <div class="content" part="content">
          <slot></slot>
        </div>
        ${this.dismissible ? html`
          <button
            type="button"
            class="close-button"
            @click="${this._dismiss}"
            aria-label="Close alert"
            part="close-button"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        ` : ''}
      </div>
    `
  }
}

customElements.define('app-alert', AppAlert)
