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

class AppToast extends LitElement {
  static properties = {
    open: { type: Boolean },
    variant: { type: String },
    duration: { type: Number },
  }

  constructor() {
    super()
    this.open = false
    this.variant = 'info'
    this.duration = 3000
  }

  _timer = null

  updated(changedProperties) {
    super.updated(changedProperties)

    if (changedProperties.has('open')) {
      if (this.open) {
        this._startTimer()
      } else {
        this._clearTimer()
      }
    }
  }

  _startTimer() {
    this._clearTimer()
    if (this.duration > 0) {
      this._timer = setTimeout(() => {
        this.open = false
        this.dispatchEvent(new CustomEvent('dismiss', { bubbles: true, composed: true }))
      }, this.duration)
    }
  }

  _clearTimer() {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  close() {
    this.open = false
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      bottom: var(--space-6);
      right: var(--space-6);
      z-index: 1000;
      max-width: 400px;
      opacity: 0;
      transform: translateY(20px);
      pointer-events: none;
      transition: opacity var(--transition-fast), transform var(--transition-fast);
    }

    :host([open]) {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .toast {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
      padding: var(--space-4);
      border-radius: var(--radius-lg);
      background-color: var(--color-bg);
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--color-border);
    }

    .header {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }

    .title {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
      flex: 1;
    }

    .message {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: 1.5;
    }

    .actions {
      display: flex;
      gap: var(--space-2);
      margin-top: var(--space-2);
    }

    /* info */
    :host([variant="info"]) .toast {
      border-left: 4px solid var(--color-info);
    }

    :host([variant="info"]) .icon {
      color: var(--color-info);
    }

    /* success */
    :host([variant="success"]) .toast {
      border-left: 4px solid var(--color-success);
    }

    :host([variant="success"]) .icon {
      color: var(--color-success);
    }

    /* warning */
    :host([variant="warning"]) .toast {
      border-left: 4px solid var(--color-warning);
    }

    :host([variant="warning"]) .icon {
      color: var(--color-warning);
    }

    /* error */
    :host([variant="error"]) .toast {
      border-left: 4px solid var(--color-error);
    }

    :host([variant="error"]) .icon {
      color: var(--color-error);
    }

    ::slotted([slot="action"]) {
      margin-left: auto;
    }
  `

  render() {
    return html`
      <div class="toast" part="toast">
        <div class="header">
          <svg class="icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            ${this._renderIcon()}
          </svg>
          <div class="title">
            <slot name="title"></slot>
          </div>
        </div>
        <div class="message">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="action"></slot>
        </div>
      </div>
    `
  }

  _renderIcon() {
    switch (this.variant) {
      case 'success':
        return html`
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        `
      case 'warning':
        return html`
          <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        `
      case 'error':
        return html`
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
        `
      default:
        return html`
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
        `
    }
  }
}

customElements.define('app-toast', AppToast)
