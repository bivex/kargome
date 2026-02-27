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

class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid var(--color-border);
    }

    @media (prefers-color-scheme: dark) {
      header {
        background: rgba(0, 0, 0, 0.72);
      }
    }

    nav {
      max-width: var(--container-wide);
      margin-inline: auto;
      padding-inline: var(--space-6);
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-8);
    }

    .logo {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: var(--space-6);
    }

    .nav-links a {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .nav-links a:hover {
      color: var(--color-text);
    }

    @media (max-width: 640px) {
      .nav-links {
        display: none;
      }
    }
  `

  render() {
    return html`
      <header>
        <nav>
          <a class="logo" href="/">Boilerplate</a>
          <ul class="nav-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </nav>
      </header>
    `
  }
}

customElements.define('app-header', AppHeader)
