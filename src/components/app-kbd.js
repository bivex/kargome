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

class AppKbd extends LitElement {
  static properties = {}

  constructor() {
    super()
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.5em;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-md);
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      font-family: var(--font-family);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      box-shadow: var(--shadow-sm);
      white-space: nowrap;
    }
  `

  render() {
    return html`<kbd part="kbd"><slot></slot></kbd>`
  }
}

customElements.define('app-kbd', AppKbd)
