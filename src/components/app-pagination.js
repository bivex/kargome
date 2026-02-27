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

class AppPagination extends LitElement {
  static properties = {
    page: { type: Number },
    totalPages: { type: Number },
    showSizeChanger: { type: Boolean },
  }

  constructor() {
    super()
    this.page = 1
    this.totalPages = 1
    this.showSizeChanger = false
  }

  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .pagination-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      padding: 0 var(--space-3);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      background-color: transparent;
      border: 1px solid var(--color-border);
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
    }

    .pagination-button:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
      border-color: var(--color-accent);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button.active {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
      border-color: var(--color-accent);
    }

    .pagination-button.active:hover {
      background-color: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }

    .pagination-ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }

    .size-changer {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-left: var(--space-4);
      padding-left: var(--space-4);
      border-left: 1px solid var(--color-border);
    }

    .size-changer select {
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      color: var(--color-text);
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      cursor: pointer;
      transition: border-color var(--transition-fast);
    }

    .size-changer select:focus {
      outline: none;
      border-color: var(--color-accent);
    }

    .size-changer label {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
    }
  `

  _getPageNumbers() {
    const pages = []
    const current = this.page
    const total = this.totalPages

    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i)
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(total)
      } else if (current >= total - 3) {
        pages.push(1)
        pages.push('...')
        for (let i = total - 4; i <= total; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(total)
      }
    }

    return pages
  }

  _handlePageChange(newPage) {
    if (newPage < 1 || newPage > this.totalPages || newPage === this.page) {
      return
    }
    this.dispatchEvent(new CustomEvent('page-change', {
      detail: { page: newPage },
      bubbles: true,
      composed: true,
    }))
  }

  _handleSizeChange(event) {
    const size = parseInt(event.target.value, 10)
    this.dispatchEvent(new CustomEvent('size-change', {
      detail: { size },
      bubbles: true,
      composed: true,
    }))
  }

  render() {
    const pages = this._getPageNumbers()
    const hasPrev = this.page > 1
    const hasNext = this.page < this.totalPages

    return html`
      <div class="pagination">
        <button
          class="pagination-button"
          ?disabled="${!hasPrev}"
          @click="${() => this._handlePageChange(this.page - 1)}"
          aria-label="Previous page"
        >
          &lsaquo;
        </button>

        ${pages.map((p) => {
          if (p === '...') {
            return html`<span class="pagination-ellipsis">&hellip;</span>`
          }
          return html`
            <button
              class="pagination-button ${p === this.page ? 'active' : ''}"
              @click="${() => this._handlePageChange(p)}"
              aria-label="Go to page ${p}"
              aria-current="${p === this.page ? 'page' : 'false'}"
            >
              ${p}
            </button>
          `
        })}

        <button
          class="pagination-button"
          ?disabled="${!hasNext}"
          @click="${() => this._handlePageChange(this.page + 1)}"
          aria-label="Next page"
        >
          &rsaquo;
        </button>

        ${this.showSizeChanger ? html`
          <div class="size-changer">
            <label for="page-size">Items per page:</label>
            <select id="page-size" @change="${this._handleSizeChange}">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        ` : ''}
      </div>
    `
  }
}

customElements.define('app-pagination', AppPagination)
