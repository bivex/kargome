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

class AppTabs extends LitElement {
  static properties = {
    value: { type: String },
  }

  constructor() {
    super()
    this.value = ''
  }

  static styles = css`
    :host {
      display: block;
    }

    .tabs-list {
      display: flex;
      gap: var(--space-2);
      border-bottom: 1px solid var(--color-border);
      padding: 0 var(--space-4);
      margin-bottom: var(--space-4);
    }

    ::slotted(app-tab) {
      padding: var(--space-3) var(--space-4);
      cursor: pointer;
      border-bottom: 2px solid transparent;
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      transition: color var(--transition-fast), border-color var(--transition-fast);
      margin-bottom: -1px;
    }

    ::slotted(app-tab:hover) {
      color: var(--color-text);
    }

    ::slotted(app-tab[active]) {
      color: var(--color-accent);
      border-bottom-color: var(--color-accent);
    }

    .panels {
      padding: 0 var(--space-4);
    }

    ::slotted(app-tab-panel) {
      display: none;
    }

    ::slotted(app-tab-panel[active]) {
      display: block;
    }
  `

  render() {
    return html`
      <div class="tabs-list" role="tablist">
        <slot name="tab"></slot>
      </div>
      <div class="panels">
        <slot name="panel"></slot>
      </div>
    `
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('value')) {
      this._updateActiveTab()
    }
  }

  firstUpdated() {
    this._updateActiveTab()
    this._attachTabListeners()
  }

  _updateActiveTab() {
    const tabs = this.querySelectorAll('app-tab')
    const panels = this.querySelectorAll('app-tab-panel')

    tabs.forEach(tab => {
      const isActive = tab.value === this.value
      tab.toggleAttribute('active', isActive)
      tab.setAttribute('aria-selected', isActive)
    })

    panels.forEach(panel => {
      const isActive = panel.value === this.value
      panel.toggleAttribute('active', isActive)
    })
  }

  _attachTabListeners() {
    const tabs = this.querySelectorAll('app-tab')
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.value = tab.value
        this.dispatchEvent(new CustomEvent('change', {
          detail: { value: tab.value },
          bubbles: true,
          composed: true,
        }))
      })
    })
  }
}

customElements.define('app-tabs', AppTabs)
