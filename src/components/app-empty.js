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

class AppEmpty extends LitElement {
  static properties = {}

  constructor() {
    super()
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--space-24) var(--space-8);
      gap: var(--space-6);
      min-height: 300px;
    }

    ::slotted([slot="icon"]) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      color: var(--color-text-secondary);
      opacity: 0.6;
    }

    ::slotted([slot="title"]) {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
      margin: 0;
    }

    ::slotted([slot="action"]) {
      margin-top: var(--space-4);
    }

    .description {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      line-height: var(--line-height-base);
      max-width: 400px;
      margin: 0;
    }
  `

  render() {
    return html`
      <slot name="icon"></slot>
      <slot name="title"></slot>
      <div class="description">
        <slot></slot>
      </div>
      <slot name="action"></slot>
    `
  }
}

customElements.define('app-empty', AppEmpty)
