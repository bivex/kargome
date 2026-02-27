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

class AppProgress extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    indeterminate: { type: Boolean },
  }

  constructor() {
    super()
    this.value = 0
    this.max = 100
    this.indeterminate = false
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .progress-container {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: var(--color-bg-secondary);
      border-radius: var(--radius-full);
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background-color: var(--color-accent);
      border-radius: var(--radius-full);
      transition: width var(--transition-base) ease;
    }

    :host([indeterminate]) .progress-bar {
      width: 30% !important;
      animation: indeterminate 1.5s ease-in-out infinite;
    }

    @keyframes indeterminate {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(300%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `

  render() {
    const percentage = this.indeterminate ? 0 : Math.min(Math.max((this.value / this.max) * 100, 0), 100)

    return html`
      <div class="progress-container" part="container">
        <div class="progress-bar" style="width: ${percentage}%;" part="bar"></div>
      </div>
    `
  }
}

customElements.define('app-progress', AppProgress)
