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

class AppCombobox extends LitElement {
  static properties = {
    value: { type: String },
    options: { type: Array },
    filterable: { type: Boolean },
    _open: { state: true },
    _filterText: { state: true },
  }

  constructor() {
    super()
    this.value = ''
    this.options = []
    this.filterable = true
    this._open = false
    this._filterText = ''
  }

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .wrapper {
      position: relative;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      cursor: pointer;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }

    .input-wrapper:hover {
      border-color: var(--color-accent);
    }

    .input-wrapper:focus-within {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent);
    }

    input {
      flex: 1;
      border: none;
      background: transparent;
      font-family: var(--font-family);
      font-size: var(--font-size-base);
      color: var(--color-text);
      outline: none;
    }

    input::placeholder {
      color: var(--color-text-secondary);
    }

    .toggle-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      transition: transform var(--transition-fast);
      color: var(--color-text-secondary);
    }

    .toggle-icon.open {
      transform: rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: calc(100% + var(--space-1));
      left: 0;
      right: 0;
      z-index: 1000;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      max-height: 250px;
      overflow-y: auto;
    }

    .option {
      padding: var(--space-3) var(--space-4);
      cursor: pointer;
      transition: background-color var(--transition-fast);
      font-size: var(--font-size-base);
      color: var(--color-text);
    }

    .option:hover,
    .option.highlighted {
      background-color: var(--color-bg-secondary);
    }

    .option.selected {
      background-color: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
      font-weight: var(--font-weight-medium);
    }

    .option.no-results {
      color: var(--color-text-secondary);
      cursor: default;
      padding: var(--space-4);
      text-align: center;
    }

    .option.no-results:hover {
      background-color: transparent;
    }
  `

  get filteredOptions() {
    if (!this.filterable || !this._filterText) {
      return this.options
    }
    const filter = this._filterText.toLowerCase()
    return this.options.filter(option =>
      String(option).toLowerCase().includes(filter)
    )
  }

  get displayValue() {
    if (this.filterable && this._open) {
      return this._filterText
    }
    return this.value || ''
  }

  _toggleDropdown() {
    this._open = !this._open
    if (!this._open) {
      this._filterText = ''
    }
  }

  _closeDropdown() {
    this._open = false
    this._filterText = ''
  }

  _handleInput(e) {
    this._filterText = e.target.value
    if (!this._open) {
      this._open = true
    }
  }

  _handleFocus() {
    this._open = true
  }

  _selectOption(option) {
    this.value = option
    this._filterText = ''
    this._open = false
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: option },
      bubbles: true,
      composed: true,
    }))
  }

  _handleKeydown(e) {
    const options = this.filteredOptions
    const highlightedIndex = options.indexOf(this._highlightedOption)

    switch (e.key) {
      case 'Escape':
        e.preventDefault()
        this._closeDropdown()
        break
      case 'Enter':
        e.preventDefault()
        if (this._highlightedOption) {
          this._selectOption(this._highlightedOption)
        } else if (options.length === 1) {
          this._selectOption(options[0])
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!this._open) {
          this._open = true
        } else if (options.length > 0) {
          const nextIndex = highlightedIndex < options.length - 1 ? highlightedIndex + 1 : 0
          this._highlightedOption = options[nextIndex]
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (options.length > 0) {
          const prevIndex = highlightedIndex > 0 ? highlightedIndex - 1 : options.length - 1
          this._highlightedOption = options[prevIndex]
        }
        break
      case 'Tab':
        this._closeDropdown()
        break
    }
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="input-wrapper" @click="${this._toggleDropdown}">
          <input
            type="text"
            .value="${this.displayValue}"
            placeholder="Select an option"
            @input="${this._handleInput}"
            @focus="${this._handleFocus}"
            @keydown="${this._handleKeydown}"
          />
          <span class="toggle-icon ${this._open ? 'open' : ''}">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        ${this._open ? html`
          <div class="dropdown">
            ${this.filteredOptions.length > 0 ? this.filteredOptions.map(option => html`
              <div
                class="option ${option === this.value ? 'selected' : ''} ${option === this._highlightedOption ? 'highlighted' : ''}"
                @click="${() => this._selectOption(option)}"
              >
                ${option}
              </div>
            `) : html`
              <div class="option no-results">No results found</div>
            `}
          </div>
        ` : ''}
      </div>
    `
  }
}

customElements.define('app-combobox', AppCombobox)
