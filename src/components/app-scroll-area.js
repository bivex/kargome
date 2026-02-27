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

class AppScrollArea extends LitElement {
  static properties = {
    orientation: { type: String },
  }

  constructor() {
    super()
    this.orientation = 'both'
  }

  static styles = css`
    :host {
      display: block;
      overflow: auto;
      max-height: 100%;
      max-width: 100%;
    }

    :host([orientation="vertical"]) {
      overflow-x: hidden;
      overflow-y: auto;
    }

    :host([orientation="horizontal"]) {
      overflow-x: auto;
      overflow-y: hidden;
    }

    :host([orientation="both"]) {
      overflow-x: auto;
      overflow-y: auto;
    }

    /* WebKit browsers (Chrome, Safari, Edge) */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--color-bg-secondary);
      border-radius: var(--radius-sm);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-border);
      border-radius: var(--radius-sm);
      transition: background var(--transition-fast);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-text-secondary);
    }

    /* Firefox */
    :host {
      scrollbar-width: thin;
      scrollbar-color: var(--color-border) var(--color-bg-secondary);
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('app-scroll-area', AppScrollArea)
