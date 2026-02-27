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

class AppCalendar extends LitElement {
  static properties = {
    value: { type: Object, converter: (value) => value ? new Date(value) : null },
    min: { type: Object, converter: (value) => value ? new Date(value) : null },
    max: { type: Object, converter: (value) => value ? new Date(value) : null },
    _currentMonth: { state: true },
  }

  constructor() {
    super()
    this.value = null
    this.min = null
    this.max = null
    this._currentMonth = new Date()
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .calendar {
      display: flex;
      flex-direction: column;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-4);
      font-family: var(--font-family);
      font-size: var(--font-size-sm);
      color: var(--color-text);
      min-width: 280px;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-4);
    }

    .month-label {
      font-weight: var(--font-weight-semibold);
      font-size: var(--font-size-base);
    }

    .nav-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--color-text);
      cursor: pointer;
      border-radius: var(--radius-md);
      transition: background-color var(--transition-fast);
      padding: 0;
    }

    .nav-button:hover {
      background-color: var(--color-bg-secondary);
    }

    .nav-button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .weekdays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      margin-bottom: var(--space-2);
    }

    .weekday {
      color: var(--color-text-secondary);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
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
      cursor: pointer;
      border-radius: var(--radius-md);
      transition: background-color var(--transition-fast);
      font-size: var(--font-size-sm);
    }

    .day:hover:not(.empty):not(.disabled) {
      background-color: var(--color-bg-secondary);
    }

    .day.selected {
      background-color: var(--color-accent);
      color: var(--color-btn-primary-text);
      font-weight: var(--font-weight-medium);
    }

    .day.selected:hover {
      background-color: var(--color-accent-hover);
    }

    .day.empty {
      cursor: default;
    }

    .day.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .day.today {
      box-shadow: inset 0 0 0 1px var(--color-accent);
    }

    .day.selected.today {
      box-shadow: none;
    }
  `

  _getMonthData() {
    const year = this._currentMonth.getFullYear()
    const month = this._currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDayOfWeek = firstDay.getDay()
    const daysInMonth = lastDay.getDate()
    const today = new Date()

    return { year, month, startDayOfWeek, daysInMonth, today }
  }

  _isDateDisabled(date) {
    if (!date) return false
    const time = date.getTime()
    if (this.min && time < this.min.getTime()) return true
    if (this.max && time > this.max.getTime()) return true
    return false
  }

  _isSameDate(date1, date2) {
    if (!date1 || !date2) return false
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate()
  }

  _previousMonth() {
    this._currentMonth = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() - 1, 1)
  }

  _nextMonth() {
    this._currentMonth = new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() + 1, 1)
  }

  _selectDate(day) {
    const year = this._currentMonth.getFullYear()
    const month = this._currentMonth.getMonth()
    const date = new Date(year, month, day)

    if (this._isDateDisabled(date)) return

    this.value = date
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }))
  }

  render() {
    const { year, month, startDayOfWeek, daysInMonth, today } = this._getMonthData()
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December']
    const weekdayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    const days = []
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(html`<div class="day empty"></div>`)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isDisabled = this._isDateDisabled(date)
      const isSelected = this._isSameDate(date, this.value)
      const isToday = this._isSameDate(date, today)

      days.push(html`
        <div
          class="day ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''} ${isToday ? 'today' : ''}"
          @click="${() => this._selectDate(day)}"
        >
          ${day}
        </div>
      `)
    }

    const canGoPrevious = !this.min || (
      new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() - 1, 1) >= new Date(this.min.getFullYear(), this.min.getMonth(), 1)
    )
    const canGoNext = !this.max || (
      new Date(this._currentMonth.getFullYear(), this._currentMonth.getMonth() + 1, 1) <= new Date(this.max.getFullYear(), this.max.getMonth(), 1)
    )

    return html`
      <div class="calendar" part="calendar">
        <div class="header">
          <button
            class="nav-button"
            @click="${this._previousMonth}"
            ?disabled="${!canGoPrevious}"
            part="nav-button"
            aria-label="Previous month"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10 3L5 8L10 13"/>
            </svg>
          </button>
          <span class="month-label">${monthNames[month]} ${year}</span>
          <button
            class="nav-button"
            @click="${this._nextMonth}"
            ?disabled="${!canGoNext}"
            part="nav-button"
            aria-label="Next month"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 3L11 8L6 13"/>
            </svg>
          </button>
        </div>
        <div class="weekdays">
          ${weekdayNames.map(day => html`<div class="weekday">${day}</div>`)}
        </div>
        <div class="days">
          ${days}
        </div>
      </div>
    `
  }
}

customElements.define('app-calendar', AppCalendar)
