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

class AppRadioGroup extends LitElement {
  static properties = {
    name: { type: String },
    value: { type: String, reflect: true },
    disabled: { type: Boolean },
    orientation: { type: String, reflect: true },
  }

  constructor() {
    super()
    this.name = ''
    this.value = ''
    this.disabled = false
    this.orientation = 'vertical'
  }

  static styles = css`
    :host {
      display: flex;
      gap: var(--space-3);
    }

    :host([orientation="vertical"]) {
      flex-direction: column;
    }

    :host([orientation="horizontal"]) {
      flex-direction: row;
      align-items: center;
    }

    ::slotted(app-radio-item) {
      cursor: pointer;
    }

    ::slotted(app-radio-item[disabled]) {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `

  render() {
    return html`<slot @slotchange="${this._handleSlotChange}"></slot>`
  }

  firstUpdated() {
    this._updateRadioItems()
  }

  updated(changedProperties) {
    if (changedProperties.has('value') || changedProperties.has('disabled') || changedProperties.has('name')) {
      this._updateRadioItems()
    }
  }

  _handleSlotChange() {
    this._updateRadioItems()
  }

  _updateRadioItems() {
    const slot = this.shadowRoot.querySelector('slot')
    if (!slot) return

    const radioItems = slot.assignedElements({ flatten: true }).filter(el => el.tagName === 'APP-RADIO-ITEM')

    radioItems.forEach(item => {
      item.name = this.name
      item.checked = item.value === this.value
      item.disabled = this.disabled || item.disabled

      item.removeEventListener('change', this._handleRadioChange)
      item.addEventListener('change', this._handleRadioChange)
    })
  }

  _handleRadioChange = (event) => {
    this.value = event.target.value
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true,
    }))
  }
}

customElements.define('app-radio-group', AppRadioGroup)
