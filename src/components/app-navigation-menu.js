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

class AppNavigationMenu extends LitElement {
  static properties = {
    value: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.value = ''
  }

  static styles = css`
    :host {
      display: block;
    }

    nav {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-full);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      text-decoration: none;
      color: var(--color-text-secondary);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    a:hover {
      color: var(--color-text);
      background-color: var(--color-bg-secondary);
    }

    a[aria-current="page"] {
      color: var(--color-accent);
      background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
    }

    svg {
      width: 1.25em;
      height: 1.25em;
      flex-shrink: 0;
    }
  `

  _handleClick(e, itemValue) {
    e.preventDefault()
    this.value = itemValue
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { value: itemValue },
      bubbles: true,
      composed: true,
    }))
  }

  render() {
    return html`
      <nav part="nav">
        <a
          href="#home"
          aria-current="${this.value === 'home' || (!this.value) ? 'page' : 'false'}"
          @click="${(e) => this._handleClick(e, 'home')}"
          part="link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Home</span>
        </a>

        <a
          href="#about"
          aria-current="${this.value === 'about' ? 'page' : 'false'}"
          @click="${(e) => this._handleClick(e, 'about')}"
          part="link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>About</span>
        </a>

        <a
          href="#services"
          aria-current="${this.value === 'services' ? 'page' : 'false'}"
          @click="${(e) => this._handleClick(e, 'services')}"
          part="link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span>Services</span>
        </a>

        <a
          href="#contact"
          aria-current="${this.value === 'contact' ? 'page' : 'false'}"
          @click="${(e) => this._handleClick(e, 'contact')}"
          part="link"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Contact</span>
        </a>
      </nav>
    `
  }
}

customElements.define('app-navigation-menu', AppNavigationMenu)
