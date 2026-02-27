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

class AppDrawer extends LitElement {
  static properties = {
    open: { type: Boolean },
    position: { type: String },
  }

  constructor() {
    super()
    this.open = false
    this.position = 'right'
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      z-index: 1000;
      pointer-events: none;
    }

    :host([position="left"]) {
      left: 0;
    }

    :host([position="right"]) {
      right: 0;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 0;
      transition: opacity var(--transition-base);
      pointer-events: none;
    }

    :host([open]) .backdrop {
      opacity: 1;
      pointer-events: auto;
    }

    .drawer {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 320px;
      max-width: 90vw;
      background-color: var(--color-bg);
      box-shadow: var(--shadow-lg);
      transition: transform var(--transition-base);
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    :host([position="left"]) .drawer {
      left: 0;
      transform: translateX(-100%);
    }

    :host([position="right"]) .drawer {
      right: 0;
      transform: translateX(100%);
    }

    :host([open]) .drawer {
      transform: translateX(0);
      pointer-events: auto;
    }

    .drawer-content {
      padding: var(--space-6);
    }
  `

  render() {
    return html`
      <div class="backdrop" @click="${this._handleBackdropClick}"></div>
      <div class="drawer" part="drawer">
        <div class="drawer-content">
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

customElements.define('app-drawer', AppDrawer)
