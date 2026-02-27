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

class AppTypography extends LitElement {
  static properties = {
    variant: { type: String },
  }

  constructor() {
    super()
    this.variant = 'body'
  }

  static styles = css`
    :host {
      display: contents;
    }

    /* h1 */
    :host([variant="h1"]) span {
      font-size: var(--font-size-3xl);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      color: var(--color-text);
    }

    /* h2 */
    :host([variant="h2"]) span {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      color: var(--color-text);
    }

    /* h3 */
    :host([variant="h3"]) span {
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      line-height: var(--line-height-tight);
      color: var(--color-text);
    }

    /* h4 */
    :host([variant="h4"]) span {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      line-height: var(--line-height-base);
      color: var(--color-text);
    }

    /* lead */
    :host([variant="lead"]) span {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-base);
      color: var(--color-text-secondary);
    }

    /* body (default) */
    :host([variant="body"]) span {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-base);
      color: var(--color-text);
    }

    /* small */
    :host([variant="small"]) span {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-base);
      color: var(--color-text);
    }

    /* muted */
    :host([variant="muted"]) span {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-regular);
      line-height: var(--line-height-base);
      color: var(--color-text-secondary);
    }
  `

  render() {
    return html`<span part="text"><slot></slot></span>`
  }
}

customElements.define('app-typography', AppTypography)
