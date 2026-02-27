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

class AppDropdownMenu extends LitElement {
  static properties = {
    open: { type: Boolean },
  }

  constructor() {
    super()
    this.open = false
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .dropdown-menu {
      position: absolute;
      top: calc(100% + var(--space-2));
      left: 0;
      min-width: 200px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      padding: var(--space-2);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-var(--space-2));
      transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
    }

    .dropdown-menu[open] {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ::slotted(:not([slot])) {
      display: block;
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-sm);
      cursor: pointer;
      color: var(--color-text);
      font-size: var(--font-size-sm);
      text-decoration: none;
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    ::slotted(:not([slot])):hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }
  `

  render() {
    return html`
      <div class="dropdown-trigger" @click="${this._toggleDropdown}">
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?open="${this.open}" part="menu">
        <slot></slot>
      </div>
    `
  }

  _toggleDropdown(e) {
    e.stopPropagation()
    this.open = !this.open
    if (this.open) {
      this._attachClickOutsideListener()
    } else {
      this._removeClickOutsideListener()
    }
  }

  _attachClickOutsideListener() {
    this._clickOutsideHandler = this._handleClickOutside.bind(this)
    document.addEventListener('click', this._clickOutsideHandler)
  }

  _removeClickOutsideListener() {
    if (this._clickOutsideHandler) {
      document.removeEventListener('click', this._clickOutsideHandler)
      this._clickOutsideHandler = null
    }
  }

  _handleClickOutside(e) {
    if (!this.contains(e.target)) {
      this.open = false
      this._removeClickOutsideListener()
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('open') && !this.open) {
      this._removeClickOutsideListener()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._removeClickOutsideListener()
  }
}

customElements.define('app-dropdown-menu', AppDropdownMenu)
