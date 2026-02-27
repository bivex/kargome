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

class AppSidebar extends LitElement {
  static properties = {
    open: { type: Boolean },
    collapsible: { type: Boolean },
    width: { type: String },
  }

  constructor() {
    super()
    this.open = false
    this.collapsible = true
    this.width = '280px'
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      z-index: 100;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: var(--sidebar-width, 280px);
      background-color: var(--color-bg-secondary);
      border-right: 1px solid var(--color-border);
      transform: translateX(-100%);
      transition: transform var(--transition-base);
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }

    .sidebar.open {
      transform: translateX(0);
    }

    :host([collapsible="false"]) .sidebar {
      position: relative;
      transform: none;
    }

    :host([collapsible="false"]) .sidebar.open {
      transform: none;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-base), visibility var(--transition-base);
      z-index: -1;
    }

    .overlay.open {
      opacity: 1;
      visibility: visible;
    }

    :host([collapsible="false"]) .overlay {
      display: none;
    }

    .sidebar-content {
      padding: var(--space-6);
    }

    @media (min-width: 768px) {
      .sidebar {
        width: var(--sidebar-width, 280px);
      }
    }
  `

  render() {
    return html`
      <div class="overlay ${this.open ? 'open' : ''}" @click="${this._handleOverlayClick}"></div>
      <aside
        class="sidebar ${this.open ? 'open' : ''}"
        style="--sidebar-width: ${this.width}"
        part="sidebar"
      >
        <div class="sidebar-content" part="content">
          <slot></slot>
        </div>
      </aside>
    `
  }

  _handleOverlayClick() {
    if (this.collapsible) {
      this.open = false
    }
  }
}

customElements.define('app-sidebar', AppSidebar)
