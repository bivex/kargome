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

class AppDialog extends LitElement {
  static properties = {
    open: { type: Boolean },
    title: { type: String },
  }

  constructor() {
    super()
    this.open = false
    this.title = ''
  }

  static styles = css`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-4);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base), visibility var(--transition-base);
    }

    .overlay[open] {
      opacity: 1;
      visibility: visible;
    }

    .dialog {
      background-color: var(--color-bg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      max-width: 500px;
      width: 100%;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      transform: scale(0.95);
      transition: transform var(--transition-base);
    }

    .overlay[open] .dialog {
      transform: scale(1);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-6);
      border-bottom: 1px solid var(--color-border);
    }

    .title {
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
      width: 32px;
      height: 32px;
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

    .close-button svg {
      width: 20px;
      height: 20px;
    }

    .body {
      padding: var(--space-6);
      overflow-y: auto;
      color: var(--color-text);
      font-size: var(--font-size-base);
      line-height: var(--line-height-base);
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: var(--space-3);
      padding: var(--space-4) var(--space-6);
      border-top: 1px solid var(--color-border);
    }

    ::slotted([slot="footer"]) {
      display: flex;
      gap: var(--space-3);
    }
  `

  render() {
    return html`
      <div class="overlay" ?open="${this.open}" @click="${this._handleOverlayClick}">
        <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <div class="header">
            <h2 class="title" id="dialog-title">${this.title}</h2>
            <button class="close-button" @click="${this._close}" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="body">
            <slot></slot>
          </div>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `
  }

  _handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      this._close()
    }
  }

  _close() {
    this.open = false
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
  }
}

customElements.define('app-dialog', AppDialog)
