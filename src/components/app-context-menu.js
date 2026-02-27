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

class AppContextMenu extends LitElement {
  static properties = {
    open: { type: Boolean },
    x: { type: Number },
    y: { type: Number },
  }

  constructor() {
    super()
    this.open = false
    this.x = 0
    this.y = 0
  }

  static styles = css`
    :host {
      position: fixed;
      z-index: 1000;
      display: none;
    }

    :host([open]) {
      display: block;
    }

    .menu {
      position: absolute;
      min-width: 180px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      padding: var(--space-2);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
    }

    ::slotted(*) {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      width: 100%;
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-sm);
      color: var(--color-text);
      text-decoration: none;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      border: none;
      background: none;
      font-family: var(--font-family);
      font-size: inherit;
      text-align: left;
    }

    ::slotted(*:hover) {
      background-color: var(--color-bg-secondary);
    }

    ::slotted(*:disabled) {
      opacity: 0.4;
      cursor: not-allowed;
    }

    ::slotted(hr) {
      display: block;
      width: 100%;
      height: 1px;
      margin: var(--space-2) 0;
      padding: 0;
      border: none;
      background-color: var(--color-border);
    }
  `

  render() {
    return html`
      <div class="menu" style="left: ${this.x}px; top: ${this.y}px;">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('app-context-menu', AppContextMenu)
