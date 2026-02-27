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

class AppAvatar extends LitElement {
  static properties = {
    src: { type: String },
    alt: { type: String },
    size: { type: String },
    fallback: { type: String },
    ring: { type: Boolean },
  }

  constructor() {
    super()
    this.src = ''
    this.alt = ''
    this.size = 'md'
    this.fallback = ''
    this.ring = false
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    .avatar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-full);
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
      font-weight: var(--font-weight-medium);
      overflow: hidden;
      box-sizing: border-box;
    }

    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .avatar span {
      text-transform: uppercase;
      user-select: none;
    }

    /* ring */
    :host([ring]) .avatar {
      box-shadow: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-border);
    }

    /* sizes */
    :host([size="xs"]) .avatar {
      width: 1.5rem;
      height: 1.5rem;
      font-size: var(--font-size-xs);
    }

    :host([size="sm"]) .avatar {
      width: 2rem;
      height: 2rem;
      font-size: var(--font-size-xs);
    }

    :host([size="md"]) .avatar {
      width: 2.5rem;
      height: 2.5rem;
      font-size: var(--font-size-sm);
    }

    :host([size="lg"]) .avatar {
      width: 3rem;
      height: 3rem;
      font-size: var(--font-size-base);
    }

    :host([size="xl"]) .avatar {
      width: 4rem;
      height: 4rem;
      font-size: var(--font-size-lg);
    }

    :host([size="2xl"]) .avatar {
      width: 5rem;
      height: 5rem;
      font-size: var(--font-size-xl);
    }
  `

  render() {
    const initials = this.fallback
      ? this.fallback
          .split(' ')
          .map(word => word.charAt(0))
          .join('')
          .toUpperCase()
          .slice(0, 2)
      : ''

    return html`
      <div class="avatar" part="avatar">
        ${this.src
          ? html`<img src="${this.src}" alt="${this.alt || initials}" />`
          : html`<span>${initials}</span>`
        }
      </div>
    `
  }
}

customElements.define('app-avatar', AppAvatar)
