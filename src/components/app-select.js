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

class AppSelect extends LitElement {
  static properties = {
    value: { type: String },
    placeholder: { type: String },
    disabled: { type: Boolean },
    searchable: { type: Boolean },
  }

  constructor() {
    super()
    this.value = ''
    this.placeholder = 'Select...'
    this.disabled = false
    this.searchable = false
    this._open = false
    this._searchQuery = ''
    this._options = []
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .select-wrapper {
      position: relative;
      min-width: 200px;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-regular);
      cursor: pointer;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
      user-select: none;
    }

    .select-trigger:hover:not(:disabled) {
      border-color: var(--color-accent);
    }

    .select-trigger:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
    }

    .select-trigger:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .select-trigger.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .select-value {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .select-value.placeholder {
      color: var(--color-text-secondary);
    }

    .select-icon {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      transition: transform var(--transition-fast);
    }

    .select-icon.open {
      transform: rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      right: 0;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      z-index: 1000;
      max-height: 240px;
      overflow: hidden;
      display: none;
    }

    .dropdown.open {
      display: block;
    }

    .search-container {
      padding: var(--space-2);
      border-bottom: 1px solid var(--color-border);
    }

    .search-input {
      width: 100%;
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      font-size: var(--font-size-sm);
      font-family: inherit;
      background-color: var(--color-bg);
      color: var(--color-text);
      transition: border-color var(--transition-fast);
    }

    .search-input:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .options-list {
      max-height: 200px;
      overflow-y: auto;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .options-list::-webkit-scrollbar {
      width: 8px;
    }

    .options-list::-webkit-scrollbar-track {
      background: var(--color-bg-secondary);
    }

    .options-list::-webkit-scrollbar-thumb {
      background: var(--color-border);
      border-radius: var(--radius-full);
    }

    .option {
      padding: var(--space-2) var(--space-3);
      font-size: var(--font-size-sm);
      color: var(--color-text);
      cursor: pointer;
      transition: background-color var(--transition-fast);
    }

    .option:hover {
      background-color: var(--color-bg-secondary);
    }

    .option.selected {
      background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
      font-weight: var(--font-weight-medium);
    }

    .option.hidden {
      display: none;
    }

    .no-results {
      padding: var(--space-4);
      text-align: center;
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }
  `

  firstUpdated() {
    this._options = Array.from(this.children).map(child => ({
      value: child.getAttribute('value') || child.textContent,
      label: child.textContent,
    }))
  }

  _toggleDropdown() {
    if (this.disabled) return
    this._open = !this._open
    this._searchQuery = ''
    this.requestUpdate()
  }

  _closeDropdown() {
    this._open = false
    this._searchQuery = ''
    this.requestUpdate()
  }

  _handleSearch(e) {
    this._searchQuery = e.target.value.toLowerCase()
    this.requestUpdate()
  }

  _selectOption(option) {
    this.value = option.value
    this._open = false
    this._searchQuery = ''
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: option.value, label: option.label },
      bubbles: true,
      composed: true,
    }))
    this.requestUpdate()
  }

  _getFilteredOptions() {
    if (!this.searchable || !this._searchQuery) {
      return this._options
    }
    return this._options.filter(option =>
      option.label.toLowerCase().includes(this._searchQuery) ||
      option.value.toLowerCase().includes(this._searchQuery)
    )
  }

  _getDisplayValue() {
    const selectedOption = this._options.find(opt => opt.value === this.value)
    return selectedOption ? selectedOption.label : this.placeholder
  }

  render() {
    const displayValue = this._getDisplayValue()
    const isPlaceholder = !this.value
    const filteredOptions = this._getFilteredOptions()

    return html`
      <div class="select-wrapper">
        <div
          class="select-trigger ${this.disabled ? 'disabled' : ''}"
          ?disabled="${this.disabled}"
          @click="${this._toggleDropdown}"
          part="trigger"
        >
          <span class="select-value ${isPlaceholder ? 'placeholder' : ''}">
            ${displayValue}
          </span>
          <svg
            class="select-icon ${this._open ? 'open' : ''}"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            part="icon"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div class="dropdown ${this._open ? 'open' : ''}" part="dropdown">
          ${this.searchable ? html`
            <div class="search-container">
              <input
                type="text"
                class="search-input"
                placeholder="Search..."
                .value="${this._searchQuery}"
                @input="${this._handleSearch}"
                @click="${(e) => e.stopPropagation()}"
                part="search-input"
              >
            </div>
          ` : ''}

          <ul class="options-list" part="list">
            ${filteredOptions.length > 0 ? filteredOptions.map(option => html`
              <li
                class="option ${option.value === this.value ? 'selected' : ''}"
                @click="${() => this._selectOption(option)}"
                part="option"
              >
                ${option.label}
              </li>
            `) : html`
              <li class="no-results">No results found</li>
            `}
          </ul>
        </div>
      </div>
    `
  }
}

customElements.define('app-select', AppSelect)
