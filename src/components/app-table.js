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

class AppTable extends LitElement {
  static properties = {
    striped: { type: Boolean },
    bordered: { type: Boolean },
  }

  constructor() {
    super()
    this.striped = false
    this.bordered = false
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--font-size-sm);
      color: var(--color-text);
    }

    :host([bordered]) table {
      border: 1px solid var(--color-border);
    }

    :host([bordered]) ::slotted(app-table-row) {
      border-bottom: 1px solid var(--color-border);
    }

    :host([striped]) ::slotted(app-table-row:nth-child(even)) {
      background-color: var(--color-bg-secondary);
    }
  `

  render() {
    return html`
      <table part="table">
        <slot></slot>
      </table>
    `
  }
}

customElements.define('app-table', AppTable)
