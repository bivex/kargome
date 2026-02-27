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

class AppButtonGroup extends LitElement {
  static properties = {
    vertical: { type: Boolean },
  }

  constructor() {
    super()
    this.vertical = false
  }

  static styles = css`
    :host {
      display: inline-flex;
    }

    :host([vertical]) {
      flex-direction: column;
    }

    ::slotted(app-button) {
      border-radius: 0;
    }

    /* Horizontal: first and last buttons */
    :host(:not([vertical])) ::slotted(app-button:first-child) {
      border-radius: var(--radius-full) 0 0 var(--radius-full);
    }

    :host(:not([vertical])) ::slotted(app-button:last-child) {
      border-radius: 0 var(--radius-full) var(--radius-full) 0;
    }

    :host(:not([vertical])) ::slotted(app-button:only-child) {
      border-radius: var(--radius-full);
    }

    /* Vertical: first and last buttons */
    :host([vertical]) ::slotted(app-button:first-child) {
      border-radius: var(--radius-full) var(--radius-full) 0 0;
    }

    :host([vertical]) ::slotted(app-button:last-child) {
      border-radius: 0 0 var(--radius-full) var(--radius-full);
    }

    :host([vertical]) ::slotted(app-button:only-child) {
      border-radius: var(--radius-full);
    }

    /* Horizontal: middle buttons get no border radius */
    :host(:not([vertical])) ::slotted(app-button:not(:first-child):not(:last-child)) {
      border-radius: 0;
    }

    /* Vertical: middle buttons get no border radius */
    :host([vertical]) ::slotted(app-button:not(:first-child):not(:last-child)) {
      border-radius: 0;
    }

    /* Add visual separator between buttons in horizontal layout */
    :host(:not([vertical])) ::slotted(app-button:not(:last-child)) {
      margin-right: -1px;
    }

    /* Add visual separator between buttons in vertical layout */
    :host([vertical]) ::slotted(app-button:not(:last-child)) {
      margin-bottom: -1px;
    }

    /* Ensure z-index stacking for proper border visibility */
    ::slotted(app-button:hover) {
      z-index: 1;
    }

    ::slotted(app-button:focus) {
      z-index: 2;
    }
  `

  render() {
    return html`<slot></slot>`
  }
}

customElements.define('app-button-group', AppButtonGroup)
