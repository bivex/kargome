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

class AppBreadcrumb extends LitElement {
  static properties = {
    separator: { type: String },
  }

  constructor() {
    super()
    this.separator = '/'
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: var(--font-size-sm);
    }

    ::slotted(breadcrumb-item:not(:last-child)) {
      color: var(--color-text-secondary);
    }

    ::slotted(breadcrumb-item:last-child) {
      color: var(--color-text);
      font-weight: var(--font-weight-medium);
    }

    ::slotted(breadcrumb-item:not(:last-child)::after) {
      content: attr(data-separator);
      margin-left: var(--space-2);
      color: var(--color-text-secondary);
    }
  `

  render() {
    return html`
      <nav part="breadcrumb" aria-label="Breadcrumb">
        <slot></slot>
      </nav>
    `
  }

  firstUpdated() {
    // Set separator on child breadcrumb-item elements
    const items = this.querySelectorAll('breadcrumb-item')
    items.forEach((item) => {
      item.setAttribute('data-separator', this.separator)
    })
  }
}

customElements.define('app-breadcrumb', AppBreadcrumb)
