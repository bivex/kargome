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

class AppSonner extends LitElement {
  static properties = {
    position: { type: String },
    duration: { type: Number },
  }

  static toastQueue = []
  static toasts = []

  constructor() {
    super()
    this.position = 'bottom-right'
    this.duration = 4000
  }

  static styles = css`
    :host {
      position: fixed;
      z-index: 9999;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      max-width: 400px;
      width: 100%;
    }

    :host([position="top-left"]),
    :host([position="bottom-left"]) {
      left: var(--space-6);
    }

    :host([position="top-right"]),
    :host([position="bottom-right"]) {
      right: var(--space-6);
    }

    :host([position="top-left"]),
    :host([position="top-right"]),
    :host([position="top-center"]) {
      top: var(--space-6);
    }

    :host([position="bottom-left"]),
    :host([position="bottom-right"]),
    :host([position="bottom-center"]) {
      bottom: var(--space-6);
    }

    :host([position="top-center"]),
    :host([position="bottom-center"]) {
      left: 50%;
      transform: translateX(-50%);
    }

    .toast {
      pointer-events: auto;
      background-color: var(--color-surface-inverse);
      color: var(--color-bg);
      padding: var(--space-4);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
      animation: slideIn var(--transition-base) ease;
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
      min-height: 48px;
    }

    .toast.removing {
      animation: slideOut var(--transition-base) ease forwards;
    }

    .toast-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
    }

    .toast-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .toast-title {
      font-weight: var(--font-weight-semibold);
    }

    .toast-message {
      color: var(--color-text-secondary);
    }

    .toast-close {
      flex-shrink: 0;
      background: none;
      border: none;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast), color var(--transition-fast);
    }

    .toast-close:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text);
    }

    /* Success toast */
    .toast[data-type="success"] {
      border-left: 4px solid var(--color-fill-green);
    }

    /* Error toast */
    .toast[data-type="error"] {
      border-left: 4px solid var(--color-fill-red);
    }

    /* Info toast */
    .toast[data-type="info"] {
      border-left: 4px solid var(--color-fill-blue);
    }

    /* Warning toast */
    .toast[data-type="warning"] {
      border-left: 4px solid var(--color-accent);
    }

    @keyframes slideIn {
      :host([position*="top"]) & {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      :host([position*="bottom"]) & {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    @keyframes slideOut {
      :host([position*="top"]) & {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-20px);
        }
      }
      :host([position*="bottom"]) & {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(20px);
        }
      }
    }

    @media (max-width: 640px) {
      :host {
        left: var(--space-4) !important;
        right: var(--space-4) !important;
        max-width: none;
        transform: none !important;
      }
    }
  `

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('position', this.position)
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('position')) {
      this.setAttribute('position', this.position)
    }
  }

  render() {
    return html``
  }

  static show(options) {
    const toast = {
      id: Date.now() + Math.random(),
      type: 'info',
      title: '',
      message: '',
      duration: 4000,
      ...options,
    }

    AppSonner.toastQueue.push(toast)
    AppSonner.processQueue()

    return toast.id
  }

  static success(title, message = '', duration = 4000) {
    return AppSonner.show({ type: 'success', title, message, duration })
  }

  static error(title, message = '', duration = 4000) {
    return AppSonner.show({ type: 'error', title, message, duration })
  }

  static info(title, message = '', duration = 4000) {
    return AppSonner.show({ type: 'info', title, message, duration })
  }

  static warning(title, message = '', duration = 4000) {
    return AppSonner.show({ type: 'warning', title, message, duration })
  }

  static dismiss(id) {
    const toast = AppSonner.toasts.find(t => t.id === id)
    if (toast) {
      AppSonner.removeToast(toast)
    }
  }

  static clear() {
    AppSonner.toasts.forEach(toast => AppSonner.removeToast(toast))
  }

  static processQueue() {
    const sonner = document.querySelector('app-sonner')
    if (!sonner || AppSonner.toastQueue.length === 0) return

    const toast = AppSonner.toastQueue.shift()
    AppSonner.toasts.push(toast)
    AppSonner.renderToast(toast, sonner)

    if (toast.duration > 0) {
      setTimeout(() => {
        AppSonner.removeToast(toast)
      }, toast.duration)
    }
  }

  static renderToast(toast, container) {
    const toastEl = document.createElement('div')
    toastEl.className = 'toast'
    toastEl.dataset.type = toast.type
    toastEl.dataset.id = toast.id

    const icon = AppSonner.getIcon(toast.type)

    toastEl.innerHTML = `
      ${icon ? `<div class="toast-icon">${icon}</div>` : ''}
      <div class="toast-content">
        ${toast.title ? `<div class="toast-title">${toast.title}</div>` : ''}
        ${toast.message ? `<div class="toast-message">${toast.message}</div>` : ''}
      </div>
      <button class="toast-close" aria-label="Close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M1 1L13 13M1 13L13 1"/>
        </svg>
      </button>
    `

    const closeBtn = toastEl.querySelector('.toast-close')
    closeBtn.addEventListener('click', () => AppSonner.removeToast(toast))

    container.appendChild(toastEl)
  }

  static getIcon(type) {
    const icons = {
      success: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="var(--color-fill-green)" stroke-width="2"/><path d="M6 10L9 13L14 7" stroke="var(--color-fill-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      error: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="var(--color-fill-red)" stroke-width="2"/><path d="M7 7L13 13M13 7L7 13" stroke="var(--color-fill-red)" stroke-width="2" stroke-linecap="round"/></svg>',
      info: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="var(--color-fill-blue)" stroke-width="2"/><path d="M10 7V10M10 13V13.01" stroke="var(--color-fill-blue)" stroke-width="2" stroke-linecap="round"/></svg>',
      warning: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="var(--color-accent)" stroke-width="2"/><path d="M10 6V10M10 13V13.01" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round"/></svg>',
    }
    return icons[type] || icons.info
  }

  static removeToast(toast) {
    const index = AppSonner.toasts.indexOf(toast)
    if (index > -1) {
      AppSonner.toasts.splice(index, 1)
    }

    const sonner = document.querySelector('app-sonner')
    if (!sonner) return

    const toastEl = sonner.querySelector(`.toast[data-id="${toast.id}"]`)
    if (toastEl) {
      toastEl.classList.add('removing')
      toastEl.addEventListener('animationend', () => {
        toastEl.remove()
      })
    }

    setTimeout(() => AppSonner.processQueue(), 100)
  }
}

customElements.define('app-sonner', AppSonner)

export { AppSonner }
