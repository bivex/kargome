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
import './app-header.js'
import './app-button.js'

class AppShell extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      padding: var(--space-24) var(--space-6);
      text-align: center;
      background-color: var(--color-bg-secondary);
    }

    .hero__eyebrow {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: var(--space-4);
    }

    .hero__title {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      color: var(--color-text);
      margin-bottom: var(--space-6);
    }

    .hero__subtitle {
      font-size: var(--font-size-xl);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin-inline: auto;
      margin-bottom: var(--space-8);
    }

    .hero__actions {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero__image {
      margin-top: var(--space-12);
      border-radius: var(--radius-xl);
      overflow: hidden;
      aspect-ratio: 16 / 9;
      max-width: 860px;
      margin-inline: auto;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero__image picture {
      width: 100%;
      height: 100%;
    }

    .hero__image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .hero__image-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-4);
      color: rgba(255,255,255,0.75);
      font-size: var(--font-size-sm);
    }

    /* container inside shadow DOM */
    .container {
      width: 100%;
      max-width: var(--container-max);
      margin-inline: auto;
      padding-inline: var(--space-6);
    }

    .section {
      padding: var(--space-16) var(--space-6);
    }

    .section__title {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-8);
      text-align: center;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6);
      max-width: var(--container-max);
      margin-inline: auto;
    }

    .card {
      background: var(--color-bg-secondary);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
      border: 1px solid var(--color-border);
    }

    .card__icon {
      width: 40px;
      height: 40px;
      margin-bottom: var(--space-4);
      color: var(--color-accent);
    }

    .card__title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-2);
    }

    .card__text {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
    }
  `

  render() {
    return html`
      <app-header></app-header>

      <main>
        <section class="hero">
          <div class="container">
            <p class="hero__eyebrow">Webstack Boilerplate</p>
            <h1 class="hero__title">Built for the modern web</h1>
            <p class="hero__subtitle">
              Lit + Vite + PostCSS. No heavy runtime. No bloat.
              Just fast, native web components.
            </p>
            <div class="hero__actions">
              <app-button variant="primary">Get started</app-button>
              <app-button variant="secondary">Learn more</app-button>
            </div>

            <div class="hero__image">
              <div class="hero__image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
                </svg>
                <span>Drop your hero image here</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <h2 class="section__title">Why this stack</h2>
            <div class="grid">
              <div class="card">
                <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <h3 class="card__title">Fast by default</h3>
                <p class="card__text">
                  Vite's dev server starts instantly. Rollup produces lean bundles.
                  No framework overhead.
                </p>
              </div>
              <div class="card">
                <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h3 class="card__title">Web Components</h3>
                <p class="card__text">
                  Lit compiles to native custom elements. Works everywhere browsers do,
                  with no virtual DOM.
                </p>
              </div>
              <div class="card">
                <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
                <h3 class="card__title">Design tokens</h3>
                <p class="card__text">
                  CSS Custom Properties for every value. Consistent theming,
                  dark mode, and easy customisation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  }
}

customElements.define('app-shell', AppShell)
