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

class AppSeparator extends LitElement {
  static properties = {
    orientation: { type: String },
    decorative: { type: Boolean },
  }

  constructor() {
    super()
    this.orientation = 'horizontal'
    this.decorative = true
  }

  static styles = css`
    :host {
      display: block;
    }

    .separator {
      border: none;
      background-color: var(--color-border);
    }

    :host([orientation="horizontal"]) .separator {
      width: 100%;
      height: 1px;
      margin: var(--space-4) 0;
    }

    :host([orientation="vertical"]) .separator {
      width: 1px;
      height: 100%;
      margin: 0 var(--space-4);
      display: inline-block;
      vertical-align: middle;
    }
  `

  render() {
    const ariaAttr = this.decorative ? { 'aria-hidden': 'true' } : { role: 'separator', 'aria-orientation': this.orientation }
    return html`<hr class="separator" ...="${ariaAttr}" />`
  }
}

customElements.define('app-separator', AppSeparator)
