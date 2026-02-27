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

class AppInputGroup extends LitElement {
  static properties = {
    disabled: { type: Boolean },
  }

  constructor() {
    super()
    this.disabled = false
  }

  static styles = css`
    :host {
      display: inline-flex;
      width: 100%;
    }

    .input-group {
      display: flex;
      align-items: stretch;
      width: 100%;
      position: relative;
    }

    .prefix,
    .suffix {
      display: flex;
      align-items: center;
      padding: 0 var(--space-3);
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      color: var(--color-text-secondary);
      transition: border-color var(--transition-fast), background-color var(--transition-fast);
    }

    .prefix {
      border-radius: var(--radius-md) 0 0 var(--radius-md);
      border-right: none;
    }

    .suffix {
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      border-left: none;
    }

    .input-wrapper {
      flex: 1;
      display: flex;
      position: relative;
    }

    ::slotted(:is(input, textarea, select)) {
      width: 100%;
      padding: var(--space-3);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      font-size: var(--font-size-base);
      font-family: var(--font-family);
      background-color: var(--color-bg);
      color: var(--color-text);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      outline: none;
    }

    ::slotted(:is(input, textarea, select):focus) {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
    }

    ::slotted(:is(input, textarea, select):disabled) {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--color-bg-secondary);
    }

    ::slotted(:is(input, textarea, select)::placeholder) {
      color: var(--color-text-secondary);
    }

    /* With prefix */
    :host(:has(.prefix ::slotted(*))) .input-wrapper ::slotted(:is(input, textarea, select)) {
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }

    :host(:has(.prefix ::slotted(*))) .input-wrapper ::slotted(:is(input, textarea, select)),
    :host(:has(.prefix ::slotted(*))) .suffix {
      border-left: none;
    }

    /* With suffix */
    :host(:has(.suffix ::slotted(*))) .input-wrapper ::slotted(:is(input, textarea, select)) {
      border-radius: var(--radius-md) 0 0 var(--radius-md);
    }

    :host(:has(.suffix ::slotted(*))) .input-wrapper ::slotted(:is(input, textarea, select)),
    :host(:has(.suffix ::slotted(*))) .prefix {
      border-right: none;
    }

    /* With both prefix and suffix */
    :host(:has(.prefix ::slotted(*)):has(.suffix ::slotted(*))) .input-wrapper ::slotted(:is(input, textarea, select)) {
      border-radius: 0;
      border-left: none;
      border-right: none;
    }

    /* Focus states for prefix/suffix */
    :host(:focus-within) .prefix,
    :host(:focus-within) .suffix {
      border-color: var(--color-accent);
    }

    /* Disabled state */
    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .prefix,
    :host([disabled]) .suffix {
      opacity: 0.5;
    }
  `

  render() {
    const hasPrefix = this.querySelector('[slot="prefix"]')
    const hasSuffix = this.querySelector('[slot="suffix"]')

    return html`
      <div class="input-group">
        ${hasPrefix ? html`<div class="prefix"><slot name="prefix"></slot></div>` : ''}
        <div class="input-wrapper">
          <slot></slot>
        </div>
        ${hasSuffix ? html`<div class="suffix"><slot name="suffix"></slot></div>` : ''}
      </div>
    `
  }
}

customElements.define('app-input-group', AppInputGroup)
