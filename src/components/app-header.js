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
  static properties = {
    _theme: { state: true },
  }

  connectedCallback() {
    super.connectedCallback()
    const saved = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    this._theme = saved ?? (systemDark ? 'dark' : 'light')
  }

  _toggle() {
    const cycle = { light: 'dark', dark: 'spring', spring: 'light' }
    const next = cycle[this._theme] ?? 'light'
    this._theme = next
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  static styles = css`
    :host {
      display: block;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--color-nav-bg);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid var(--color-border);
      transition: background var(--transition-base);
    }

    nav {
      max-width: var(--container-wide);
      margin-inline: auto;
      padding-inline: var(--space-6);
      height: var(--nav-height);
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

    .theme-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: var(--radius-full);
      border: 1px solid var(--color-border);
      background: transparent;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: background var(--transition-fast), color var(--transition-fast);
      flex-shrink: 0;
    }

    .theme-toggle:hover {
      background: var(--color-bg-secondary);
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
          <a class="logo" href="/">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:6px">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            Kargome
          </a>
          <ul class="nav-links">
            <li><a href="https://lit.dev" target="_blank" rel="noopener">Lit</a></li>
            <li><a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a></li>
            <li><a href="https://bun.sh" target="_blank" rel="noopener">Bun</a></li>
            <li><a href="https://github.com/bivex" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
          <button class="theme-toggle" @click=${this._toggle} aria-label="Toggle color theme (current: ${this._theme})">
            ${this._theme === 'dark'
              ? html`<!-- moon → click gives spring -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
              : this._theme === 'spring'
              ? html`<!-- blossom → click gives light -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/><path d="M12 14a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z"/><path d="M2 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/><path d="M14 12a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4z"/></svg>`
              : html`<!-- sun → click gives dark -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
            }
          </button>
        </nav>
      </header>
    `
  }
}

customElements.define('app-header', AppHeader)
