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
    :host { display: block; }

    /* ── layout ── */
    .container {
      width: 100%;
      max-width: var(--container-max);
      margin-inline: auto;
      padding-inline: var(--space-6);
    }

    @media (max-width: 480px) {
      .container { padding-inline: var(--space-4); }
    }

    /* ── hero ── */
    .hero {
      padding: var(--space-24) var(--space-6) var(--space-16);
      text-align: center;
      background: var(--color-bg);
    }

    @media (max-width: 768px) {
      .hero { padding: var(--space-16) var(--space-6) var(--space-12); }
    }

    @media (max-width: 480px) {
      .hero { padding: var(--space-12) var(--space-4) var(--space-8); }
    }

    .hero__badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-full);
      background: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: var(--space-6);
    }

    .hero__title {
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      letter-spacing: -0.02em;
      margin-bottom: var(--space-4);
    }

    .hero__title span {
      color: var(--color-accent);
    }

    .hero__subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 520px;
      margin-inline: auto;
      margin-bottom: var(--space-8);
      line-height: var(--line-height-base);
    }

    .hero__actions {
      display: flex;
      gap: var(--space-3);
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: var(--space-12);
    }

    .hero__stats {
      display: inline-flex;
      gap: var(--space-6);
      flex-wrap: wrap;
      justify-content: center;
      padding: var(--space-4) var(--space-6);
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
    }

    @media (max-width: 480px) {
      .hero__stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4) var(--space-6);
        width: 100%;
      }
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }

    .stat__value {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: var(--color-text);
      font-variant-numeric: tabular-nums;
    }

    .stat__label {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      letter-spacing: 0.04em;
    }

    .stat__sep {
      width: 1px;
      background: var(--color-border);
      align-self: stretch;
    }

    @media (max-width: 480px) {
      .stat__sep { display: none; }
    }

    /* ── stack ── */
    .section {
      padding: var(--space-16) var(--space-6);
    }

    @media (max-width: 768px) {
      .section { padding: var(--space-12) var(--space-6); }
    }

    @media (max-width: 480px) {
      .section { padding: var(--space-8) var(--space-4); }
    }

    .section--alt {
      background: var(--color-bg-secondary);
    }

    .section__label {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: var(--space-3);
    }

    .section__title {
      font-size: clamp(var(--font-size-xl), 4vw, var(--font-size-2xl));
      font-weight: var(--font-weight-bold);
      text-align: center;
      margin-bottom: var(--space-2);
      letter-spacing: -0.01em;
    }

    .section__sub {
      text-align: center;
      color: var(--color-text-secondary);
      font-size: var(--font-size-base);
      margin-bottom: var(--space-12);
    }

    @media (max-width: 480px) {
      .section__sub { margin-bottom: var(--space-8); }
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: var(--space-4);
    }

    .card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-6);
    }

    .section--alt .card {
      background: var(--color-bg-secondary);
    }

    .card__head {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .card__icon {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .card__icon svg { display: block; }

    .card__name {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
    }

    .card__version {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      margin-top: 1px;
    }

    .card__text {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: var(--line-height-base);
      margin-bottom: var(--space-4);
    }

    .card__tag {
      display: inline-block;
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      padding: 2px var(--space-2);
      border-radius: var(--radius-sm);
      background: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
    }

    /* ── components demo ── */
    .demo-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-6);
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-4);
    }

    .demo-row__label {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      min-width: 80px;
    }

    @media (max-width: 480px) {
      .demo-row { padding: var(--space-4); gap: var(--space-3); }
      .demo-row__label { min-width: unset; width: 100%; }
    }

    .demo-row__items {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      align-items: center;
    }

    /* ── tokens ── */
    .tokens-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: var(--space-3);
    }

    @media (max-width: 480px) {
      .tokens-grid { grid-template-columns: repeat(2, 1fr); }
    }

    .token {
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--color-border);
    }

    .token__swatch {
      height: 64px;
    }

    .token__info {
      padding: var(--space-2) var(--space-3);
      background: var(--color-bg);
    }

    .token__name {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      font-family: monospace;
    }

    .token__hex {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      font-family: monospace;
    }
  `

  render() {
    return html`
      <app-header></app-header>

      <main>

        <!-- HERO -->
        <section class="hero">
          <div class="container">
            <div class="hero__badge">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <circle cx="5" cy="5" r="5"/>
              </svg>
              Production-ready boilerplate
            </div>

            <h1 class="hero__title">
              Lit · Vite · <span>LightningCSS</span>
            </h1>

            <p class="hero__subtitle">
              Native Web Components. No virtual DOM, no heavy runtime.
              CSS in Rust. Builds in under 100ms.
            </p>

            <div class="hero__actions">
              <app-button variant="primary">Use this template</app-button>
              <app-button variant="secondary">View source</app-button>
            </div>

            <div class="hero__stats">
              <div class="stat">
                <span class="stat__value">78ms</span>
                <span class="stat__label">prod build</span>
              </div>
              <div class="stat__sep"></div>
              <div class="stat">
                <span class="stat__value">10.32 kB</span>
                <span class="stat__label">JS gzipped</span>
              </div>
              <div class="stat__sep"></div>
              <div class="stat">
                <span class="stat__value">0.87 kB</span>
                <span class="stat__label">CSS gzipped</span>
              </div>
              <div class="stat__sep"></div>
              <div class="stat">
                <span class="stat__value">11.51 kB</span>
                <span class="stat__label">total gzipped</span>
              </div>
            </div>
          </div>
        </section>

        <!-- STACK -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Stack</p>
            <h2 class="section__title">Every tool earns its place</h2>
            <p class="section__sub">No webpack. No Babel. No PostCSS. Just what's needed.</p>

            <div class="grid-4">

              <div class="card">
                <div class="card__head">
                  <div class="card__icon" style="background:var(--color-surface-inverse)">
                    <!-- Lit flame -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C12 2 7 7 7 13a5 5 0 0010 0c0-3-2-5-2-5s-1 2-3 2c0-4 2-6 2-6 0 0 1 1.5 2 3 .7 1 1 2.3 1 3.5" stroke="#ff7c5c" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div class="card__name">Lit</div>
                    <div class="card__version">v3.3.2</div>
                  </div>
                </div>
                <p class="card__text">
                  Reactive Web Components built on the native Custom Elements API.
                  Shadow DOM, reactive properties, zero virtual DOM.
                </p>
                <span class="card__tag">Web Components</span>
              </div>

              <div class="card">
                <div class="card__head">
                  <div class="card__icon" style="background:var(--color-surface-inverse)">
                    <!-- Vite bolt -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8e063" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  </div>
                  <div>
                    <div class="card__name">Vite</div>
                    <div class="card__version">v6.4.1</div>
                  </div>
                </div>
                <p class="card__text">
                  Native ESM dev server — instant start regardless of project size.
                  Rollup production bundles. Rolldown (Rust) auto-upgrades in v7.
                </p>
                <span class="card__tag">Bundler</span>
              </div>

              <div class="card">
                <div class="card__head">
                  <div class="card__icon" style="background:var(--color-surface-inverse)">
                    <!-- CSS bolt -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d07aff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M4 3h16l-2 14-6 2-6-2z"/>
                      <path d="M8 8h8M8.5 12h6l-.5 3-2.5.7-2.5-.7"/>
                    </svg>
                  </div>
                  <div>
                    <div class="card__name">LightningCSS</div>
                    <div class="card__version">v1.31.1</div>
                  </div>
                </div>
                <p class="card__text">
                  Rust CSS parser, transformer, and minifier in one pass.
                  Replaces PostCSS + autoprefixer. 100× faster.
                </p>
                <span class="card__tag">Rust · CSS</span>
              </div>

              <div class="card">
                <div class="card__head">
                  <div class="card__icon" style="background:var(--color-surface-inverse)">
                    <!-- Bun circle -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="1.8" stroke-linecap="round">
                      <circle cx="12" cy="13" r="7"/>
                      <path d="M8 10c.5-2 2-3 4-2.5"/>
                      <circle cx="9.5" cy="13" r="1" fill="#f5a623" stroke="none"/>
                      <circle cx="14.5" cy="13" r="1" fill="#f5a623" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <div class="card__name">Bun</div>
                    <div class="card__version">v1.3.5</div>
                  </div>
                </div>
                <p class="card__text">
                  Runtime + package manager. Installed 194 packages in 3.8s.
                  Drop-in replacement for Node + npm.
                </p>
                <span class="card__tag">Runtime · PM</span>
              </div>

            </div>
          </div>
        </section>

        <!-- COMPONENTS -->
        <section class="section">
          <div class="container">
            <p class="section__label">Components</p>
            <h2 class="section__title">app-button</h2>
            <p class="section__sub">Three variants, renders &lt;a&gt; when href is set.</p>

            <div class="demo-row">
              <span class="demo-row__label">Variants</span>
              <div class="demo-row__items">
                <app-button variant="primary">Primary</app-button>
                <app-button variant="secondary">Secondary</app-button>
                <app-button variant="ghost">Ghost</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Disabled</span>
              <div class="demo-row__items">
                <app-button variant="primary" disabled>Primary</app-button>
                <app-button variant="secondary" disabled>Secondary</app-button>
                <app-button variant="ghost" disabled>Ghost</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">As link</span>
              <div class="demo-row__items">
                <app-button variant="primary" href="#">href → &lt;a&gt;</app-button>
                <app-button variant="ghost" href="#">Ghost link</app-button>
              </div>
            </div>
          </div>
        </section>

        <!-- TOKENS -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Design tokens</p>
            <h2 class="section__title">CSS Custom Properties</h2>
            <p class="section__sub">Defined in tokens.css · live: swatches reflect the active theme.</p>

            <div class="tokens-grid">
              ${[
                '--color-bg',
                '--color-bg-secondary',
                '--color-text',
                '--color-text-secondary',
                '--color-accent',
                '--color-border',
                '--color-fill-red',
                '--color-fill-green',
                '--color-surface-inverse',
                '--color-btn-primary-text',
              ].map(name => html`
                <div class="token">
                  <div class="token__swatch" style="background:var(${name})"></div>
                  <div class="token__info">
                    <div class="token__name">${name.replace('--color-', '')}</div>
                    <div class="token__hex">${name}</div>
                  </div>
                </div>
              `)}
            </div>
          </div>
        </section>

      </main>
    `
  }
}

customElements.define('app-shell', AppShell)
