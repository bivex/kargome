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

class AppDirection extends LitElement {
  static properties = {
    dir: { type: String },
  }

  constructor() {
    super()
    this.dir = 'ltr'
  }

  static styles = css`
    :host {
      display: contents;
    }

    :host([dir="ltr"]) ::slotted(*) {
      direction: ltr;
    }

    :host([dir="rtl"]) ::slotted(*) {
      direction: rtl;
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('app-direction', AppDirection)
