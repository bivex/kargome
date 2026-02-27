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

class AppHoverCard extends LitElement {
  static properties = {
    openDelay: { type: Number },
  }

  constructor() {
    super()
    this.openDelay = 300
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .card {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: var(--space-2);
      padding: var(--space-3) var(--space-4);
      background-color: var(--color-surface-inverse);
      color: var(--color-bg);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-fast), visibility var(--transition-fast);
      box-shadow: var(--shadow-md);
      z-index: 1000;
    }

    .card::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: var(--space-2) solid transparent;
      border-top-color: var(--color-surface-inverse);
    }

    :host([visible]) .card {
      opacity: 1;
      visibility: visible;
    }
  `

  render() {
    return html`
      <div class="card" part="card">
        <slot></slot>
      </div>
      <slot name="trigger"></slot>
    `
  }

  firstUpdated() {
    this._setupHoverListeners()
  }

  _setupHoverListeners() {
    const trigger = this.querySelector('[slot="trigger"]') || this

    let showTimer = null

    trigger.addEventListener('mouseenter', () => {
      showTimer = setTimeout(() => {
        this.setAttribute('visible', '')
      }, this.openDelay)
    })

    trigger.addEventListener('mouseleave', () => {
      if (showTimer) {
        clearTimeout(showTimer)
        showTimer = null
      }
      this.removeAttribute('visible')
    })
  }
}

customElements.define('app-hover-card', AppHoverCard)
