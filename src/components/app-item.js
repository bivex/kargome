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

class AppItem extends LitElement {
  static properties = {
    disabled: { type: Boolean },
    selected: { type: Boolean },
    href: { type: String },
  }

  constructor() {
    super()
    this.disabled = false
    this.selected = false
    this.href = ''
  }

  static styles = css`
    :host {
      display: block;
    }

    .item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-4);
      background-color: var(--color-bg);
      color: var(--color-text);
      text-decoration: none;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      border-radius: var(--radius-md);
    }

    .item:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
    }

    .item:disabled,
    .item[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([selected]) .item {
      background-color: var(--color-bg-secondary);
    }

    ::slotted([slot="leading"]) {
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }

    .item-content {
      flex: 1;
      display: flex;
      align-items: center;
      min-width: 0;
    }

    ::slotted([slot="trailing"]) {
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }
  `

  render() {
    const content = html`
      <slot name="leading"></slot>
      <span class="item-content">
        <slot></slot>
      </span>
      <slot name="trailing"></slot>
    `

    if (this.href) {
      return html`<a href="${this.href}" class="item" part="item">${content}</a>`
    }
    return html`<div class="item" part="item">${content}</div>`
  }
}

customElements.define('app-item', AppItem)
