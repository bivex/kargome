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

class AppLabel extends LitElement {
  static properties = {
    for: { type: String },
    required: { type: Boolean },
  }

  constructor() {
    super()
    this.for = ''
    this.required = false
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    label {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      line-height: var(--line-height-base);
      cursor: pointer;
    }

    .required {
      color: var(--color-fill-red);
      font-size: var(--font-size-base);
      line-height: 1;
    }
  `

  render() {
    return html`
      <label for="${this.for}" part="label">
        <slot></slot>
        ${this.required ? html`<span class="required" aria-hidden="true">*</span>` : ''}
      </label>
    `
  }
}

customElements.define('app-label', AppLabel)
