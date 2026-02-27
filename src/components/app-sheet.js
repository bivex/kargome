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

class AppSheet extends LitElement {
  static properties = {
    open: { type: Boolean },
    position: { type: String },
  }

  constructor() {
    super()
    this.open = false
    this.position = 'bottom'
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      z-index: 1000;
      pointer-events: none;
    }

    :host([position="bottom"]) {
      bottom: 0;
    }

    :host([position="top"]) {
      top: 0;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: opacity var(--transition-base);
      pointer-events: none;
    }

    :host([open]) .backdrop {
      opacity: 1;
      pointer-events: auto;
    }

    .sheet {
      position: absolute;
      left: 0;
      right: 0;
      background-color: var(--color-bg);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
      box-shadow: var(--shadow-lg);
      max-height: 80vh;
      overflow-y: auto;
      transform: translateY(100%);
      transition: transform var(--transition-base) cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: auto;
    }

    :host([open]) .sheet {
      transform: translateY(0);
    }

    :host([position="top"]) .sheet {
      border-radius: 0 0 var(--radius-xl) var(--radius-xl);
      transform: translateY(-100%);
    }

    :host([position="top"][open]) .sheet {
      transform: translateY(0);
    }

    .sheet-content {
      padding: var(--space-6);
    }
  `

  render() {
    return html`
      <div class="backdrop" @click="${this._handleBackdropClick}"></div>
      <div class="sheet" part="sheet">
        <div class="sheet-content" part="sheet-content">
          <slot></slot>
        </div>
      </div>
    `
  }

  _handleBackdropClick() {
    this.open = false
    this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }))
  }
}

customElements.define('app-sheet', AppSheet)
