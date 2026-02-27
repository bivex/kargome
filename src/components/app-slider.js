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

class AppSlider extends LitElement {
  static properties = {
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    disabled: { type: Boolean },
  }

  constructor() {
    super()
    this.value = 0
    this.min = 0
    this.max = 100
    this.step = 1
    this.disabled = false
  }

  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
      max-width: var(--container-max);
    }

    .slider-container {
      display: flex;
      align-items: center;
      gap: var(--space-4);
    }

    .slider-wrapper {
      flex: 1;
      position: relative;
      height: 20px;
      display: flex;
      align-items: center;
    }

    .slider-track {
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-full);
    }

    .slider-fill {
      position: absolute;
      height: 4px;
      background-color: var(--color-accent);
      border-radius: var(--radius-full);
      pointer-events: none;
      transition: background-color var(--transition-fast);
    }

    .slider-thumb {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: var(--color-bg);
      border: 2px solid var(--color-accent);
      border-radius: var(--radius-full);
      cursor: grab;
      transform: translate(-50%, -50%);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
      z-index: 1;
    }

    .slider-thumb:hover {
      box-shadow: var(--shadow-sm);
    }

    .slider-thumb:active {
      cursor: grabbing;
    }

    .slider-thumb:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }

    input[type="range"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      margin: 0;
    }

    .value-display {
      min-width: var(--space-12);
      text-align: right;
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--color-text);
      font-variant-numeric: tabular-nums;
    }

    :host([disabled]) .slider-thumb {
      cursor: not-allowed;
      opacity: 0.5;
    }

    :host([disabled]) .slider-fill {
      background-color: var(--color-border);
    }

    :host([disabled]) .slider-thumb {
      border-color: var(--color-border);
    }

    :host([disabled]) input[type="range"] {
      cursor: not-allowed;
    }
  `

  #onInput(e) {
    this.value = Number(e.target.value)
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }))
  }

  #getFillPercentage() {
    const range = this.max - this.min
    if (range === 0) return 0
    return ((this.value - this.min) / range) * 100
  }

  #getThumbPosition() {
    return this.#getFillPercentage()
  }

  render() {
    return html`
      <div class="slider-container">
        <div class="slider-wrapper">
          <div class="slider-track"></div>
          <div class="slider-fill" style="width: ${this.#getFillPercentage()}%"></div>
          <div class="slider-thumb" style="left: ${this.#getThumbPosition()}%"></div>
          <input
            type="range"
            min="${this.min}"
            max="${this.max}"
            step="${this.step}"
            .value="${this.value}"
            ?disabled="${this.disabled}"
            @input="${this.#onInput}"
            part="input"
            aria-label="Slider"
            aria-valuemin="${this.min}"
            aria-valuemax="${this.max}"
            aria-valuenow="${this.value}"
          />
        </div>
        <span class="value-display">${this.value}</span>
      </div>
    `
  }
}

customElements.define('app-slider', AppSlider)
