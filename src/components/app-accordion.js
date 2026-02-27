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

class AppAccordion extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  }

  static styles = css`
    :host {
      display: block;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      background-color: var(--color-bg);
      overflow: hidden;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: var(--space-4);
      background-color: var(--color-bg);
      border: none;
      cursor: pointer;
      font-family: var(--font-family);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      text-align: left;
      transition: background-color var(--transition-fast);
    }

    .header:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
    }

    .header:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      flex: 1;
    }

    .icon {
      width: 20px;
      height: 20px;
      transition: transform var(--transition-base);
      flex-shrink: 0;
    }

    :host([open]) .icon {
      transform: rotate(180deg);
    }

    .panel {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--transition-base) ease-out;
    }

    :host([open]) .panel {
      grid-template-rows: 1fr;
    }

    .panel-inner {
      overflow: hidden;
    }

    .content {
      padding: 0 var(--space-4) var(--space-4);
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
    }

    :host([disabled]) {
      pointer-events: none;
      opacity: 0.6;
    }
  `

  constructor() {
    super()
    this.open = false
    this.disabled = false
  }

  #handleClick() {
    if (!this.disabled) {
      this.open = !this.open
      this.dispatchEvent(new CustomEvent('toggle', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }))
    }
  }

  #handleKeyDown(event) {
    if (this.disabled) return

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.#handleClick()
    }
  }

  render() {
    const panelId = `panel-${this.id || Math.random().toString(36).slice(2, 11)}`

    return html`
      <button
        class="header"
        ?disabled="${this.disabled}"
        aria-expanded="${this.open}"
        aria-controls="${panelId}"
        @click="${this.#handleClick}"
        @keydown="${this.#handleKeyDown}"
      >
        <span class="header-content">
          <slot name="header"></slot>
        </span>
        <svg
          class="icon"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div class="panel" id="${panelId}" role="region">
        <div class="panel-inner">
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('app-accordion', AppAccordion)
