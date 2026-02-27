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

class AppCarousel extends LitElement {
  static properties = {
    autoplay: { type: Boolean },
    interval: { type: Number },
  }

  constructor() {
    super()
    this.autoplay = false
    this.interval = 3000
    this.currentIndex = 0
    this.slides = []
    this._timer = null
  }

  connectedCallback() {
    super.connectedCallback()
    this.updateSlides()
    if (this.autoplay) {
      this.startAutoplay()
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.stopAutoplay()
  }

  updated(changedProperties) {
    super.updated(changedProperties)
    if (changedProperties.has('autoplay')) {
      if (this.autoplay) {
        this.startAutoplay()
      } else {
        this.stopAutoplay()
      }
    }
    if (changedProperties.has('interval')) {
      if (this.autoplay) {
        this.stopAutoplay()
        this.startAutoplay()
      }
    }
  }

  updateSlides() {
    this.slides = Array.from(this.querySelectorAll(':scope > *'))
  }

  startAutoplay() {
    this.stopAutoplay()
    this._timer = setInterval(() => {
      this.next()
    }, this.interval)
  }

  stopAutoplay() {
    if (this._timer) {
      clearInterval(this._timer)
      this._timer = null
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length
    this.updateSlidePosition()
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1
    this.updateSlidePosition()
  }

  goTo(index) {
    this.currentIndex = index
    this.updateSlidePosition()
  }

  updateSlidePosition() {
    const track = this.shadowRoot.querySelector('.carousel-track')
    if (track) {
      track.style.transform = `translateX(-${this.currentIndex * 100}%)`
    }
    this.updateDots()
  }

  updateDots() {
    const dots = this.shadowRoot.querySelectorAll('.carousel-dot')
    dots.forEach((dot, index) => {
      if (index === this.currentIndex) {
        dot.setAttribute('active', '')
      } else {
        dot.removeAttribute('active')
      }
    })
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }

    .carousel-container {
      position: relative;
      width: 100%;
    }

    .carousel-track {
      display: flex;
      transition: transform var(--transition-base);
      width: 100%;
    }

    .carousel-slide {
      flex: 0 0 100%;
      width: 100%;
    }

    .carousel-slide ::slotted(*) {
      width: 100%;
      display: block;
    }

    .carousel-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background-color: var(--color-nav-bg);
      backdrop-filter: blur(10px);
      border: 1px solid var(--color-border);
      color: var(--color-text);
      font-size: var(--font-size-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
      z-index: 2;
    }

    .carousel-arrow:hover {
      background-color: var(--color-bg-secondary);
      border-color: var(--color-accent);
      color: var(--color-accent);
    }

    .carousel-arrow[disabled] {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .carousel-arrow[disabled]:hover {
      background-color: var(--color-nav-bg);
      border-color: var(--color-border);
      color: var(--color-text);
    }

    .carousel-arrow.prev {
      left: var(--space-4);
    }

    .carousel-arrow.next {
      right: var(--space-4);
    }

    .carousel-dots {
      position: absolute;
      bottom: var(--space-4);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: var(--space-2);
      z-index: 2;
    }

    .carousel-dot {
      width: 8px;
      height: 8px;
      border-radius: var(--radius-full);
      background-color: var(--color-border);
      border: none;
      cursor: pointer;
      transition: background-color var(--transition-fast), transform var(--transition-fast);
    }

    .carousel-dot:hover {
      background-color: var(--color-text-secondary);
    }

    .carousel-dot[active] {
      background-color: var(--color-accent);
      transform: scale(1.25);
    }

    @media (max-width: 768px) {
      .carousel-arrow {
        width: 32px;
        height: 32px;
        font-size: var(--font-size-base);
      }

      .carousel-arrow.prev {
        left: var(--space-2);
      }

      .carousel-arrow.next {
        right: var(--space-2);
      }
    }
  `

  render() {
    return html`
      <div class="carousel-container">
        <div class="carousel-track">
          <div class="carousel-slide"><slot></slot></div>
        </div>

        <button
          class="carousel-arrow prev"
          aria-label="Previous slide"
          @click="${this.previous}"
        >
          ‹
        </button>

        <button
          class="carousel-arrow next"
          aria-label="Next slide"
          @click="${this.next}"
        >
          ›
        </button>

        <div class="carousel-dots">
          <button class="carousel-dot" aria-label="Go to slide 1" @click="${() => this.goTo(0)}"></button>
        </div>
      </div>
    `
  }
}

customElements.define('app-carousel', AppCarousel)
