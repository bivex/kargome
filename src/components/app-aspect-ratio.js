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

class AppAspectRatio extends LitElement {
  static properties = {
    ratio: { type: String },
  }

  constructor() {
    super()
    this.ratio = '16/9'
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      position: relative;
      width: 100%;
      overflow: hidden;
      aspect-ratio: var(--app-aspect-ratio, 16 / 9);
    }

    .container::before {
      content: '';
      display: block;
      width: 1px;
      padding-bottom: calc(100% / (var(--app-aspect-ratio-numerator, 16) / var(--app-aspect-ratio-denominator, 9)));
    }

    .wrapper {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wrapper ::slotted(*) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `

  render() {
    const [numerator, denominator] = this.ratio.split('/').map(n => parseFloat(n.trim()))
    const aspectRatioValue = denominator ? `${numerator} / ${denominator}` : `${numerator} / 1`

    return html`
      <div class="container" style="--app-aspect-ratio: ${aspectRatioValue}; --app-aspect-ratio-numerator: ${numerator}; --app-aspect-ratio-denominator: ${denominator || 1};">
        <div class="wrapper">
          <slot></slot>
        </div>
      </div>
    `
  }
}

customElements.define('app-aspect-ratio', AppAspectRatio)
