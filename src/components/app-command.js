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

class AppCommand extends LitElement {
  static properties = {
    open: { type: Boolean },
  }

  constructor() {
    super()
    this.open = false
    this._boundHandleKeyDown = this._handleKeyDown.bind(this)
    this._boundHandleOutsideClick = this._handleOutsideClick.bind(this)
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('keydown', this._boundHandleKeyDown)
    document.addEventListener('click', this._boundHandleOutsideClick)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('keydown', this._boundHandleKeyDown)
    document.removeEventListener('click', this._boundHandleOutsideClick)
  }

  _handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      this.open = !this.open
    }

    if (e.key === 'Escape' && this.open) {
      this.open = false
    }
  }

  _handleOutsideClick(e) {
    if (this.open && !e.composedPath().includes(this)) {
      this.open = false
    }
  }

  static styles = css`
    :host {
      display: contents;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-fast), visibility var(--transition-fast);
    }

    .backdrop.open {
      opacity: 1;
      visibility: visible;
    }

    .dialog {
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%) translateY(-20px) scale(0.96);
      width: 90%;
      max-width: 560px;
      max-height: 400px;
      background-color: var(--color-bg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-fast), visibility var(--transition-fast), transform var(--transition-fast);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .dialog.open {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0) scale(1);
    }

    .search-container {
      display: flex;
      align-items: center;
      padding: var(--space-4);
      border-bottom: 1px solid var(--color-border);
      gap: var(--space-3);
    }

    .search-icon {
      width: 20px;
      height: 20px;
      color: var(--color-text-secondary);
      flex-shrink: 0;
    }

    .search-input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: var(--font-size-base);
      font-family: var(--font-family);
      color: var(--color-text);
    }

    .search-input::placeholder {
      color: var(--color-text-secondary);
    }

    .shortcut {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-1) var(--space-2);
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      flex-shrink: 0;
    }

    .content {
      flex: 1;
      overflow-y: auto;
      padding: var(--space-2);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-12) var(--space-4);
      color: var(--color-text-secondary);
      text-align: center;
      gap: var(--space-3);
    }

    .empty-state-icon {
      width: 48px;
      height: 48px;
      color: var(--color-text-secondary);
    }

    .empty-state-text {
      font-size: var(--font-size-sm);
    }
  `

  render() {
    return html`
      <div class="backdrop ${this.open ? 'open' : ''}" part="backdrop"></div>
      <div class="dialog ${this.open ? 'open' : ''}" part="dialog">
        <div class="search-container" part="search-container">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            class="search-input"
            placeholder="Search..."
            part="search-input"
            autofocus
          />
          <span class="shortcut" part="shortcut">
            <span>⌘</span>
            <span>K</span>
          </span>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('app-command', AppCommand)
