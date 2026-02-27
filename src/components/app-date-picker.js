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

class AppDatePicker extends LitElement {
  static properties = {
    value: { type: Object, converter: (value) => {
      if (!value) return null
      if (value instanceof Date) return value
      return new Date(value)
    }},
    format: { type: String },
    _isOpen: { state: true },
    _currentMonth: { state: true },
    _currentYear: { state: true },
    _hoveredDate: { state: true },
  }

  constructor() {
    super()
    this.value = null
    this.format = 'YYYY-MM-DD'
    this._isOpen = false
    this._currentMonth = new Date().getMonth()
    this._currentYear = new Date().getFullYear()
    this._hoveredDate = null
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
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }

    .input-wrapper:hover {
      border-color: var(--color-accent);
    }

    .input-wrapper:focus-within {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
    }

    .input-wrapper.has-value {
      border-color: var(--color-accent);
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-family: var(--font-family);
      font-size: var(--font-size-sm);
      color: var(--color-text);
      cursor: pointer;
    }

    input::placeholder {
      color: var(--color-text-secondary);
    }

    .calendar-icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--color-text-secondary);
      pointer-events: none;
    }

    .clear-button {
      display: none;
      padding: var(--space-1);
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--color-text-secondary);
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .clear-button:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    .has-value .clear-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .popup {
      position: absolute;
      top: calc(100% + var(--space-2));
      left: 0;
      z-index: 1000;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      min-width: 280px;
      overflow: hidden;
    }

    .popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-3);
      border-bottom: 1px solid var(--color-border);
    }

    .month-year-label {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
    }

    .nav-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: none;
      background: transparent;
      border-radius: var(--radius-sm);
      cursor: pointer;
      color: var(--color-text-secondary);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .nav-button:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    .popup-body {
      padding: var(--space-3);
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: var(--space-1);
      margin-bottom: var(--space-2);
    }

    .weekday {
      text-align: center;
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      color: var(--color-text-secondary);
      padding: var(--space-2);
    }

    .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: var(--space-1);
    }

    .day {
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-sm);
      border-radius: var(--radius-sm);
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
      border: none;
      background: transparent;
      color: var(--color-text);
    }

    .day:hover:not(:disabled) {
      background-color: var(--color-bg-secondary);
    }

    .day.other-month {
      color: var(--color-text-secondary);
      opacity: 0.5;
    }

    .day.today {
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
    }

    .day.selected {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
    }

    .day.selected:hover {
      background-color: var(--color-accent-hover);
    }

    .day:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }

    .popup-footer {
      display: flex;
      justify-content: space-between;
      padding: var(--space-3);
      border-top: 1px solid var(--color-border);
      gap: var(--space-2);
    }

    .footer-button {
      padding: var(--space-2) var(--space-4);
      border: none;
      border-radius: var(--radius-sm);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .today-button {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    .today-button:hover {
      background-color: var(--color-border);
    }

    .close-button {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
    }

    .close-button:hover {
      background-color: var(--color-accent-hover);
    }
  `

  _formatDate(date) {
    if (!date) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    switch (this.format) {
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`
      case 'YYYY-MM-DD':
      default:
        return `${year}-${month}-${day}`
    }
  }

  _parseDate(value) {
    if (!value) return null
    if (value instanceof Date) return value

    const parsed = new Date(value)
    return isNaN(parsed.getTime()) ? null : parsed
  }

  _isSameDay(date1, date2) {
    if (!date1 || !date2) return false
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate()
  }

  _isToday(date) {
    return this._isSameDay(date, new Date())
  }

  _getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
  }

  _getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay()
  }

  _getPrevMonthDays(year, month) {
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = month === 0 ? year - 1 : year
    const daysInMonth = this._getDaysInMonth(prevYear, prevMonth)
    const firstDay = this._getFirstDayOfMonth(year, month)
    const days = []

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInMonth - i,
        month: prevMonth,
        year: prevYear,
        isOtherMonth: true
      })
    }

    return days
  }

  _getCurrentMonthDays(year, month) {
    const daysInMonth = this._getDaysInMonth(year, month)
    const days = []

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month,
        year,
        isOtherMonth: false
      })
    }

    return days
  }

  _getNextMonthDays(year, month) {
    const totalCells = 42
    const firstDay = this._getFirstDayOfMonth(year, month)
    const daysInMonth = this._getDaysInMonth(year, month)
    const remainingCells = totalCells - (firstDay + daysInMonth)
    const days = []
    const nextMonth = month === 11 ? 0 : month + 1
    const nextYear = month === 11 ? year + 1 : year

    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        month: nextMonth,
        year: nextYear,
        isOtherMonth: true
      })
    }

    return days
  }

  _getAllDays() {
    return [
      ...this._getPrevMonthDays(this._currentYear, this._currentMonth),
      ...this._getCurrentMonthDays(this._currentYear, this._currentMonth),
      ...this._getNextMonthDays(this._currentYear, this._currentMonth)
    ]
  }

  _handleInputClick() {
    this._isOpen = !this._isOpen
  }

  _handleOutsideClick(e) {
    if (!e.composedPath().includes(this)) {
      this._isOpen = false
    }
  }

  _handleDayClick(dayData) {
    const newDate = new Date(dayData.year, dayData.month, dayData.day)
    this.value = newDate
    this._isOpen = false
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: newDate },
      bubbles: true,
      composed: true
    }))
  }

  _handleClear() {
    this.value = null
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: null },
      bubbles: true,
      composed: true
    }))
  }

  _handlePrevMonth() {
    if (this._currentMonth === 0) {
      this._currentMonth = 11
      this._currentYear--
    } else {
      this._currentMonth--
    }
  }

  _handleNextMonth() {
    if (this._currentMonth === 11) {
      this._currentMonth = 0
      this._currentYear++
    } else {
      this._currentMonth++
    }
  }

  _handleToday() {
    const today = new Date()
    this.value = today
    this._currentMonth = today.getMonth()
    this._currentYear = today.getFullYear()
    this._isOpen = false
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: today },
      bubbles: true,
      composed: true
    }))
  }

  _handleClose() {
    this._isOpen = false
  }

  _handleInputKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this._isOpen = !this._isOpen
    } else if (e.key === 'Escape') {
      this._isOpen = false
    } else if (e.key === 'Tab') {
      this._isOpen = false
    }
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this._handleOutsideClick.bind(this))

    if (this.value) {
      this._currentMonth = this.value.getMonth()
      this._currentYear = this.value.getFullYear()
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this._handleOutsideClick.bind(this))
    super.disconnectedCallback()
  }

  willUpdate(changedProperties) {
    if (changedProperties.has('value') && this.value) {
      this._currentMonth = this.value.getMonth()
      this._currentYear = this.value.getFullYear()
    }
  }

  render() {
    const weekdayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December']
    const allDays = this._getAllDays()

    return html`
      <div class="wrapper">
        <div class="input-wrapper ${this.value ? 'has-value' : ''}"
             part="input-wrapper"
             @click="${this._handleInputClick}">
          <svg class="calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <input type="text"
                 .value="${this._formatDate(this.value)}"
                 placeholder="${this._formatDate(new Date())}"
                 readonly
                 @keydown="${this._handleInputKeydown}"
                 part="input" />
          <button class="clear-button"
                  type="button"
                  @click="${(e) => { e.stopPropagation(); this._handleClear() }}"
                  part="clear-button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        ${this._isOpen ? html`
          <div class="popup" part="popup">
            <div class="popup-header" part="popup-header">
              <button class="nav-button" type="button" @click="${this._handlePrevMonth}" part="nav-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <span class="month-year-label">${monthNames[this._currentMonth]} ${this._currentYear}</span>
              <button class="nav-button" type="button" @click="${this._handleNextMonth}" part="nav-button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div class="popup-body" part="popup-body">
              <div class="weekdays" part="weekdays">
                ${weekdayLabels.map(label => html`<span class="weekday">${label}</span>`)}
              </div>
              <div class="days" part="days">
                ${allDays.map(dayData => {
                  const date = new Date(dayData.year, dayData.month, dayData.day)
                  const isSelected = this._isSameDay(date, this.value)
                  const isToday = this._isToday(date)

                  return html`
                    <button class="day ${dayData.isOtherMonth ? 'other-month' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}"
                            type="button"
                            ?disabled="${dayData.isOtherMonth}"
                            @click="${() => this._handleDayClick(dayData)}"
                            part="day">
                      ${dayData.day}
                    </button>
                  `
                })}
              </div>
            </div>

            <div class="popup-footer" part="popup-footer">
              <button class="footer-button today-button" type="button" @click="${this._handleToday}" part="today-button">
                Today
              </button>
              <button class="footer-button close-button" type="button" @click="${this._handleClose}" part="close-button">
                Close
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `
  }
}

customElements.define('app-date-picker', AppDatePicker)
