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

class AppCollapsible extends LitElement {
  static properties = {
    open: { type: Boolean },
    disabled: { type: Boolean },
  }

  constructor() {
    super()
    this.open = false
    this.disabled = false
  }

  static styles = css`
    :host {
      display: block;
    }

    .collapsible-content {
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      transition: max-height var(--transition-base), opacity var(--transition-base);
    }

    :host([open]) .collapsible-content {
      max-height: 1000px;
      opacity: 1;
    }

    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }
  `

  render() {
    return html`
      <div class="collapsible-content" part="content">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('app-collapsible', AppCollapsible)
