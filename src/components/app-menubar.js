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

class AppMenubar extends LitElement {
  static properties = {
    value: { type: String },
  }

  static styles = css`
    :host {
      display: block;
    }

    .menubar {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      padding: var(--space-2) var(--space-4);
      background-color: var(--color-nav-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--color-border);
    }

    .menu-item {
      position: relative;
    }

    .menu-trigger {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      white-space: nowrap;
    }

    .menu-trigger:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-accent);
    }

    .menu-trigger[aria-expanded="true"] {
      background-color: var(--color-bg-secondary);
      color: var(--color-accent);
    }

    .menu-trigger.active {
      color: var(--color-accent);
    }

    .menu-trigger .dropdown-icon {
      width: 12px;
      height: 12px;
      transition: transform var(--transition-fast);
    }

    .menu-trigger[aria-expanded="true"] .dropdown-icon {
      transform: rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: calc(100% + var(--space-1));
      left: 0;
      min-width: 180px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      padding: var(--space-2);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-8px);
      transition: opacity var(--transition-fast), transform var(--transition-fast), visibility var(--transition-fast);
    }

    .dropdown.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .dropdown-item {
      display: block;
      width: 100%;
      padding: var(--space-2) var(--space-3);
      border: none;
      border-radius: var(--radius-sm);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-regular);
      color: var(--color-text);
      background: transparent;
      text-align: left;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .dropdown-item:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-accent);
    }

    .dropdown-item.active {
      background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
      font-weight: var(--font-weight-medium);
    }
  `

  constructor() {
    super()
    this.value = ''
    this._openDropdown = null
    this._menuItems = []
  }

  render() {
    return html`
      <nav class="menubar" part="menubar" role="menubar">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </nav>
    `
  }

  _handleSlotChange(e) {
    const slot = e.target
    this._menuItems = Array.from(slot.assignedElements({ flatten: true }))
      .filter(el => el.classList.contains('menu-item'))

    this._menuItems.forEach(item => {
      const trigger = item.querySelector('.menu-trigger')
      const dropdown = item.querySelector('.dropdown')

      if (trigger && dropdown) {
        trigger.addEventListener('click', (e) => this._toggleDropdown(item, e))
        trigger.addEventListener('keydown', (e) => this._handleKeydown(e, item))

        const dropdownItems = dropdown.querySelectorAll('.dropdown-item')
        dropdownItems.forEach(dropdownItem => {
          dropdownItem.addEventListener('click', (e) => this._selectItem(e, dropdownItem))
        })
      }
    })
  }

  _toggleDropdown(item, e) {
    e.stopPropagation()
    const trigger = item.querySelector('.menu-trigger')
    const dropdown = item.querySelector('.dropdown')

    if (this._openDropdown && this._openDropdown !== item) {
      this._closeDropdown(this._openDropdown)
    }

    if (dropdown.classList.contains('open')) {
      this._closeDropdown(item)
    } else {
      dropdown.classList.add('open')
      trigger.setAttribute('aria-expanded', 'true')
      this._openDropdown = item
    }
  }

  _closeDropdown(item) {
    const trigger = item.querySelector('.menu-trigger')
    const dropdown = item.querySelector('.dropdown')

    dropdown.classList.remove('open')
    trigger.setAttribute('aria-expanded', 'false')

    if (this._openDropdown === item) {
      this._openDropdown = null
    }
  }

  _selectItem(e, item) {
    e.stopPropagation()
    const value = item.dataset.value || item.textContent.trim()

    this.value = value
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value },
      bubbles: true,
      composed: true
    }))

    if (this._openDropdown) {
      this._closeDropdown(this._openDropdown)
    }

    const allItems = this.renderRoot.querySelectorAll('.dropdown-item, .menu-trigger')
    allItems.forEach(i => i.classList.remove('active'))
    item.classList.add('active')
  }

  _handleKeydown(e, item) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this._toggleDropdown(item, e)
    } else if (e.key === 'Escape') {
      if (this._openDropdown) {
        this._closeDropdown(this._openDropdown)
      }
    }
  }
}

customElements.define('app-menubar', AppMenubar)
