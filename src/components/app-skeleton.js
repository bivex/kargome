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

class AppSkeleton extends LitElement {
  static properties = {
    variant: { type: String },
    width: { type: String },
    height: { type: String },
  }

  constructor() {
    super()
    this.variant = 'text'
    this.width = ''
    this.height = ''
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .skeleton {
      background-color: var(--color-bg-secondary);
      position: relative;
      overflow: hidden;
    }

    .skeleton::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    /* text variant - default line height */
    :host([variant="text"]) .skeleton {
      height: 1em;
      border-radius: var(--radius-sm);
    }

    /* circular variant */
    :host([variant="circular"]) .skeleton {
      border-radius: var(--radius-full);
    }

    /* rectangular variant */
    :host([variant="rectangular"]) .skeleton {
      border-radius: var(--radius-md);
    }
  `

  render() {
    const style = `
      ${this.width ? `width: ${this.width};` : ''}
      ${this.height ? `height: ${this.height};` : ''}
    `

    return html`<div class="skeleton" style="${style}"></div>`
  }
}

customElements.define('app-skeleton', AppSkeleton)
