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

class AppResizable extends LitElement {
  static properties = {
    direction: { type: Array },
  }

  constructor() {
    super()
    this.direction = ['right', 'bottom', 'right-bottom']
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .resizable-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .resize-handle {
      position: absolute;
      background-color: transparent;
      transition: background-color var(--transition-fast);
    }

    .resize-handle:hover {
      background-color: var(--color-accent);
      opacity: 0.3;
    }

    .resize-handle:active {
      background-color: var(--color-accent);
      opacity: 0.5;
    }

    /* right handle */
    .resize-handle.right {
      top: 0;
      right: 0;
      width: var(--space-2);
      height: 100%;
      cursor: ew-resize;
    }

    /* bottom handle */
    .resize-handle.bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      height: var(--space-2);
      cursor: ns-resize;
    }

    /* right-bottom corner handle */
    .resize-handle.right-bottom {
      bottom: 0;
      right: 0;
      width: var(--space-4);
      height: var(--space-4);
      cursor: nwse-resize;
      border-radius: var(--radius-sm) 0 0 0;
    }

    .resize-handle.right-bottom:hover {
      background-color: var(--color-accent);
    }
  `

  render() {
    return html`
      <div class="resizable-container">
        <slot></slot>
        ${this.direction.includes('right') ? html`<div class="resize-handle right" part="handle-right"></div>` : ''}
        ${this.direction.includes('bottom') ? html`<div class="resize-handle bottom" part="handle-bottom"></div>` : ''}
        ${this.direction.includes('right-bottom') ? html`<div class="resize-handle right-bottom" part="handle-corner"></div>` : ''}
      </div>
    `
  }

  firstUpdated() {
    this._initResize()
  }

  _initResize() {
    const container = this.shadowRoot.querySelector('.resizable-container')
    const handles = this.shadowRoot.querySelectorAll('.resize-handle')

    handles.forEach(handle => {
      handle.addEventListener('mousedown', (e) => this._startResize(e, container, handle))
    })
  }

  _startResize(e, container, handle) {
    e.preventDefault()
    e.stopPropagation()

    const startX = e.clientX
    const startY = e.clientY
    const startWidth = container.offsetWidth
    const startHeight = container.offsetHeight
    const handleClass = handle.classList.contains('right') ? 'right' :
                       handle.classList.contains('bottom') ? 'bottom' : 'right-bottom'

    const onMouseMove = (e) => {
      const deltaX = e.clientX - startX
      const deltaY = e.clientY - startY

      if (handleClass === 'right' || handleClass === 'right-bottom') {
        const newWidth = startWidth + deltaX
        if (newWidth > 50) {
          this.style.width = `${newWidth}px`
        }
      }

      if (handleClass === 'bottom' || handleClass === 'right-bottom') {
        const newHeight = startHeight + deltaY
        if (newHeight > 50) {
          this.style.height = `${newHeight}px`
        }
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      this.dispatchEvent(new CustomEvent('resize-end', {
        bubbles: true,
        composed: true,
        detail: {
          width: this.offsetWidth,
          height: this.offsetHeight
        }
      }))
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)

    this.dispatchEvent(new CustomEvent('resize-start', {
      bubbles: true,
      composed: true
    }))
  }
}

customElements.define('app-resizable', AppResizable)
