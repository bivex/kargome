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

class AppAlertDialog extends LitElement {
  static properties = {
    open: { type: Boolean },
    title: { type: String },
  }

  static styles = css`
    :host {
      display: contents;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base), visibility var(--transition-base);
      z-index: 1000;
    }

    .backdrop.visible {
      opacity: 1;
      visibility: visible;
    }

    .dialog-wrapper {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-4);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base), visibility var(--transition-base);
      z-index: 1001;
    }

    .dialog-wrapper.visible {
      opacity: 1;
      visibility: visible;
    }

    .dialog {
      background-color: var(--color-bg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      max-width: 500px;
      width: 100%;
      transform: scale(0.95);
      transition: transform var(--transition-base);
      border: 1px solid var(--color-border);
    }

    .dialog-wrapper.visible .dialog {
      transform: scale(1);
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-4) var(--space-6);
      border-bottom: 1px solid var(--color-border);
    }

    .dialog-title {
      margin: 0;
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
      line-height: var(--line-height-tight);
    }

    .close-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--space-8);
      height: var(--space-8);
      padding: 0;
      border: none;
      background: transparent;
      border-radius: var(--radius-sm);
      cursor: pointer;
      color: var(--color-text-secondary);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .close-button:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    .close-button:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }

    .close-button svg {
      width: var(--space-4);
      height: var(--space-4);
    }

    .dialog-body {
      padding: var(--space-6);
      color: var(--color-text);
      line-height: var(--line-height-base);
    }

    .dialog-actions {
      display: flex;
      gap: var(--space-3);
      justify-content: flex-end;
      padding: var(--space-4) var(--space-6);
      border-top: 1px solid var(--color-border);
    }

    .dialog-actions:empty {
      display: none;
    }
  `

  constructor() {
    super()
    this.open = false
    this.title = ''
    this._boundHandleKeyDown = this._handleKeyDown.bind(this)
    this._boundHandleBackdropClick = this._handleBackdropClick.bind(this)
  }

  updated(changedProperties) {
    super.updated(changedProperties)

    if (changedProperties.has('open')) {
      if (this.open) {
        this._open()
      } else {
        this._close()
      }
    }
  }

  _open() {
    document.addEventListener('keydown', this._boundHandleKeyDown)
    document.addEventListener('click', this._boundHandleBackdropClick)
    document.body.style.overflow = 'hidden'
  }

  _close() {
    document.removeEventListener('keydown', this._boundHandleKeyDown)
    document.removeEventListener('click', this._boundHandleBackdropClick)
    document.body.style.overflow = ''
  }

  _handleKeyDown(event) {
    if (event.key === 'Escape') {
      this.open = false
    }
  }

  _handleBackdropClick(event) {
    const dialogWrapper = this.shadowRoot?.querySelector('.dialog-wrapper')
    if (dialogWrapper && event.target === dialogWrapper) {
      this.open = false
    }
  }

  _handleClose() {
    this.open = false
  }

  render() {
    return html`
      <div class="backdrop ${this.open ? 'visible' : ''}"></div>
      <div
        class="dialog-wrapper ${this.open ? 'visible' : ''}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <div class="dialog">
          <div class="dialog-header">
            <h2 id="dialog-title" class="dialog-title">${this.title}</h2>
            <button
              type="button"
              class="close-button"
              aria-label="Close dialog"
              @click="${this._handleClose}"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="dialog-body">
            <slot></slot>
          </div>
          <div class="dialog-actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('app-alert-dialog', AppAlertDialog)
