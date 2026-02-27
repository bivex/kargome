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

class AppPopover extends LitElement {
  static properties = {
    open: { type: Boolean },
  }

  static styles = css`
    :host {
      position: relative;
      display: inline-block;
    }

    .popover {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: var(--space-2);
      z-index: 1000;
      min-width: 200px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      padding: var(--space-3);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity var(--transition-fast), visibility var(--transition-fast);
    }

    .popover.visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .trigger {
      display: contents;
    }
  `

  constructor() {
    super()
    this.open = false
    this._handleClickOutside = this._handleClickOutside.bind(this)
    this._handleTriggerClick = this._handleTriggerClick.bind(this)
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this._handleClickOutside)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('click', this._handleClickOutside)
  }

  _handleTriggerClick(e) {
    e.stopPropagation()
    this.open = !this.open
  }

  _handleClickOutside(e) {
    if (!this.open) return
    if (!this.contains(e.target)) {
      this.open = false
    }
  }

  render() {
    return html`
      <div class="trigger" @click="${this._handleTriggerClick}">
        <slot name="trigger"></slot>
      </div>
      <div class="popover ${this.open ? 'visible' : ''}" part="popover">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('app-popover', AppPopover)
