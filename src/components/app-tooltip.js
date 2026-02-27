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

class AppTooltip extends LitElement {
  static properties = {
    content: { type: String },
    placement: { type: String },
    delay: { type: Number },
  }

  constructor() {
    super()
    this.content = ''
    this.placement = 'top'
    this.delay = 200
    this._showTimer = null
    this._isVisible = false
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-wrapper {
      position: relative;
      display: inline-block;
    }

    .tooltip {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--color-surface-inverse);
      color: var(--color-bg);
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-md);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-tight);
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity var(--transition-fast), visibility var(--transition-fast);
      z-index: 1000;
      pointer-events: none;
    }

    .tooltip.visible {
      opacity: 1;
      visibility: visible;
    }

    /* top placement */
    :host([placement="top"]) .tooltip {
      bottom: calc(100% + var(--space-2));
    }

    /* bottom placement */
    :host([placement="bottom"]) .tooltip {
      top: calc(100% + var(--space-2));
    }

    /* left placement */
    :host([placement="left"]) .tooltip {
      right: calc(100% + var(--space-2));
      left: auto;
      transform: none;
    }

    /* right placement */
    :host([placement="right"]) .tooltip {
      left: calc(100% + var(--space-2));
      transform: none;
    }

    ::slotted(*) {
      cursor: help;
    }
  `

  render() {
    return html`
      <div class="tooltip-wrapper">
        <slot></slot>
        <span class="tooltip" part="tooltip">${this.content}</span>
      </div>
    `
  }

  firstUpdated() {
    this._setupEventListeners()
  }

  _setupEventListeners() {
    const wrapper = this.shadowRoot.querySelector('.tooltip-wrapper')

    wrapper.addEventListener('mouseenter', this._handleMouseEnter.bind(this))
    wrapper.addEventListener('mouseleave', this._handleMouseLeave.bind(this))
    wrapper.addEventListener('focus', this._handleFocus.bind(this), true)
    wrapper.addEventListener('blur', this._handleBlur.bind(this), true)
  }

  _handleMouseEnter() {
    if (this._showTimer) {
      clearTimeout(this._showTimer)
    }
    this._showTimer = setTimeout(() => {
      this._show()
    }, this.delay)
  }

  _handleMouseLeave() {
    if (this._showTimer) {
      clearTimeout(this._showTimer)
      this._showTimer = null
    }
    this._hide()
  }

  _handleFocus() {
    if (this._showTimer) {
      clearTimeout(this._showTimer)
    }
    this._showTimer = setTimeout(() => {
      this._show()
    }, this.delay)
  }

  _handleBlur() {
    if (this._showTimer) {
      clearTimeout(this._showTimer)
      this._showTimer = null
    }
    this._hide()
  }

  _show() {
    const tooltip = this.shadowRoot.querySelector('.tooltip')
    if (tooltip) {
      tooltip.classList.add('visible')
      this._isVisible = true
    }
  }

  _hide() {
    const tooltip = this.shadowRoot.querySelector('.tooltip')
    if (tooltip) {
      tooltip.classList.remove('visible')
      this._isVisible = false
    }
  }
}

customElements.define('app-tooltip', AppTooltip)
