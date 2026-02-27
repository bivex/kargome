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

class AppDataTable extends LitElement {
  static properties = {
    data: { type: Array },
    columns: { type: Array },
  }

  constructor() {
    super()
    this.data = []
    this.columns = []
    this.sortColumn = null
    this.sortDirection = 'asc'
    this.currentPage = 1
    this.pageSize = 10
  }

  static styles = css`
    :host {
      display: block;
    }

    .table-container {
      overflow-x: auto;
      border-radius: var(--radius-md);
      border: 1px solid var(--color-border);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--font-size-sm);
    }

    thead {
      background-color: var(--color-bg-secondary);
    }

    th {
      padding: var(--space-3) var(--space-4);
      text-align: left;
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
      border-bottom: 1px solid var(--color-border);
      cursor: pointer;
      user-select: none;
      transition: background-color var(--transition-fast);
    }

    th:hover {
      background-color: color-mix(in srgb, var(--color-accent) 8%, var(--color-bg-secondary));
    }

    th.sortable {
      position: relative;
      padding-right: var(--space-8);
    }

    th.sortable::after {
      content: '↕';
      position: absolute;
      right: var(--space-3);
      opacity: 0.3;
      font-size: var(--font-size-xs);
    }

    th.sort-asc::after {
      content: '↑';
      opacity: 1;
      color: var(--color-accent);
    }

    th.sort-desc::after {
      content: '↓';
      opacity: 1;
      color: var(--color-accent);
    }

    td {
      padding: var(--space-3) var(--space-4);
      border-bottom: 1px solid var(--color-border);
      color: var(--color-text-secondary);
    }

    tr:last-child td {
      border-bottom: none;
    }

    tr:hover td {
      background-color: var(--color-bg-secondary);
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-4);
      border-top: 1px solid var(--color-border);
      gap: var(--space-4);
    }

    .pagination-info {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
    }

    .pagination-controls {
      display: flex;
      gap: var(--space-2);
    }

    .pagination-button {
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      background-color: var(--color-bg);
      color: var(--color-text);
      font-size: var(--font-size-sm);
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .pagination-button:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
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

    .empty-state {
      padding: var(--space-12);
      text-align: center;
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
    }
  `

  get sortedData() {
    if (!this.sortColumn) return this.data

    return [...this.data].sort((a, b) => {
      const aVal = a[this.sortColumn]
      const bVal = b[this.sortColumn]

      if (aVal === bVal) return 0

      const comparison = aVal < bVal ? -1 : 1
      return this.sortDirection === 'asc' ? comparison : -comparison
    })
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize
    return this.sortedData.slice(startIndex, startIndex + this.pageSize)
  }

  get totalPages() {
    return Math.ceil(this.data.length / this.pageSize)
  }

  handleSort(columnKey) {
    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortColumn = columnKey
      this.sortDirection = 'asc'
    }
    this.currentPage = 1
    this.requestUpdate()
  }

  goToPage(page) {
    this.currentPage = page
    this.requestUpdate()
  }

  renderHeader() {
    return this.columns.map((column) => {
      const sortableClass = column.sortable !== false ? 'sortable' : ''
      const sortClass = this.sortColumn === column.key
        ? `sort-${this.sortDirection}`
        : ''

      return html`
        <th
          class="${sortableClass} ${sortClass}"
          @click="${column.sortable !== false ? () => this.handleSort(column.key) : null}"
        >
          ${column.label || column.key}
        </th>
      `
    })
  }

  renderRow(row) {
    return this.columns.map((column) => {
      const value = row[column.key]
      const displayValue = column.render ? column.render(row) : value
      return html`<td>${displayValue !== undefined ? displayValue : ''}</td>`
    })
  }

  renderPagination() {
    if (this.data.length <= this.pageSize) return ''

    const startItem = (this.currentPage - 1) * this.pageSize + 1
    const endItem = Math.min(this.currentPage * this.pageSize, this.data.length)

    return html`
      <div class="pagination">
        <div class="pagination-info">
          Showing ${startItem} to ${endItem} of ${this.data.length} entries
        </div>
        <div class="pagination-controls">
          <button
            class="pagination-button"
            ?disabled="${this.currentPage === 1}"
            @click="${() => this.goToPage(this.currentPage - 1)}"
          >
            Previous
          </button>
          ${this.renderPageNumbers()}
          <button
            class="pagination-button"
            ?disabled="${this.currentPage === this.totalPages}"
            @click="${() => this.goToPage(this.currentPage + 1)}"
          >
            Next
          </button>
        </div>
      </div>
    `
  }

  renderPageNumbers() {
    const pages = []
    const maxVisible = 5

    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2))
    let endPage = Math.min(this.totalPages, startPage + maxVisible - 1)

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(html`
        <button
          class="pagination-button ${i === this.currentPage ? 'active' : ''}"
          @click="${() => this.goToPage(i)}"
        >
          ${i}
        </button>
      `)
    }

    return pages
  }

  render() {
    if (!this.data || this.data.length === 0) {
      return html`
        <div class="table-container">
          <div class="empty-state">No data available</div>
        </div>
      `
    }

    return html`
      <div class="table-container">
        <table>
          <thead>
            <tr>${this.renderHeader()}</tr>
          </thead>
          <tbody>
            ${this.paginatedData.map((row) => html`
              <tr>${this.renderRow(row)}</tr>
            `)}
          </tbody>
        </table>
        ${this.renderPagination()}
      </div>
    `
  }
}

customElements.define('app-data-table', AppDataTable)
