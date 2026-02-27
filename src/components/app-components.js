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
import './app-header.js'
import './app-button.js'

// Import all components for showcase
import './app-accordion.js'
import './app-alert.js'
import './app-alert-dialog.js'
import './app-aspect-ratio.js'
import './app-avatar.js'
import './app-badge.js'
import './app-breadcrumb.js'
import './app-button-group.js'
import './app-calendar.js'
import './app-card.js'
import './app-carousel.js'
import './app-chart.js'
import './app-checkbox.js'
import './app-collapsible.js'
import './app-combobox.js'
import './app-command.js'
import './app-context-menu.js'
import './app-data-table.js'
import './app-date-picker.js'
import './app-dialog.js'
import './app-direction.js'
import './app-drawer.js'
import './app-dropdown-menu.js'
import './app-divider.js'
import './app-empty.js'
import './app-field.js'
import './app-hover-card.js'
import './app-input.js'
import './app-input-group.js'
import './app-input-otp.js'
import './app-item.js'
import './app-kbd.js'
import './app-label.js'
import './app-menubar.js'
import './app-native-select.js'
import './app-navigation-menu.js'
import './app-pagination.js'
import './app-popover.js'
import './app-progress.js'
import './app-radio-group.js'
import './app-radio-item.js'
import './app-resizable.js'
import './app-scroll-area.js'
import './app-select.js'
import './app-separator.js'
import './app-sheet.js'
import './app-sidebar.js'
import './app-skeleton.js'
import './app-slider.js'
import './app-sonner.js'
import './app-spinner.js'
import './app-switch.js'
import './app-table.js'
import './app-tabs.js'
import './app-textarea.js'
import './app-toast.js'
import './app-toggle.js'
import './app-toggle-group.js'
import './app-tooltip.js'
import './app-typography.js'

class AppComponents extends LitElement {
  static properties = {
    _category: { state: true },
    _dialogOpen: { state: true },
    _drawerOpen: { state: true },
    _popoverOpen: { state: true },
    _sheetOpen: { state: true },
    _switchStates: { state: true },
    _radioValue: { state: true },
    _sliderValue: { state: true },
    _tabValue: { state: true },
    _progressValue: { state: true },
    _toggleValue: { state: true },
    _inputValue: { state: true },
    _textareaValue: { state: true },
    _comboboxValue: { state: true },
    _selectValue: { state: true },
    _otpValue: { state: true },
    _carouselIndex: { state: true },
  }

  constructor() {
    super()
    this._category = 'all'
    this._dialogOpen = false
    this._drawerOpen = false
    this._popoverOpen = false
    this._sheetOpen = false
    this._switchStates = { sw1: false, sw2: true }
    this._radioValue = 'option1'
    this._sliderValue = 50
    this._tabValue = 'tab1'
    this._progressValue = 60
    this._toggleValue = 'toggle1'
    this._inputValue = ''
    this._textareaValue = ''
    this._comboboxValue = ''
    this._selectValue = 'option1'
    this._otpValue = ''
    this._carouselIndex = 0
  }

  static styles = css`
    :host { display: block; }

    .container {
      width: 100%;
      max-width: var(--container-wide);
      margin-inline: auto;
      padding-inline: var(--space-6);
    }

    @media (max-width: 480px) {
      .container { padding-inline: var(--space-4); }
    }

    .hero {
      padding: var(--space-16) var(--space-6) var(--space-12);
      text-align: center;
      background: var(--color-bg);
      border-bottom: 1px solid var(--color-border);
    }

    @media (max-width: 768px) {
      .hero { padding: var(--space-12) var(--space-6) var(--space-8); }
    }

    @media (max-width: 480px) {
      .hero { padding: var(--space-8) var(--space-4); }
    }

    .hero__title {
      font-size: clamp(2rem, 5vw, 2.5rem);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-tight);
      letter-spacing: -0.02em;
      margin-bottom: var(--space-3);
    }

    .hero__subtitle {
      font-size: var(--font-size-base);
      color: var(--color-text-secondary);
      max-width: 520px;
      margin-inline: auto;
    }

    .controls {
      padding: var(--space-6);
      background: var(--color-bg-secondary);
      border-bottom: 1px solid var(--color-border);
      position: sticky;
      top: var(--nav-height);
      z-index: 10;
    }

    .controls__inner {
      max-width: var(--container-wide);
      margin: 0 auto;
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
      align-items: center;
    }

    .category-filter {
      display: flex;
      gap: var(--space-2);
      flex-wrap: wrap;
    }

    .category-btn {
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      background: var(--color-bg);
      color: var(--color-text-secondary);
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-medium);
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .category-btn:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
    }

    .category-btn.active {
      background: var(--color-accent);
      border-color: var(--color-accent);
      color: var(--color-btn-primary-text);
    }

    .section {
      padding: var(--space-12) var(--space-6);
    }

    @media (max-width: 768px) {
      .section { padding: var(--space-8) var(--space-6); }
    }

    @media (max-width: 480px) {
      .section { padding: var(--space-6) var(--space-4); }
    }

    .section--alt {
      background: var(--color-bg-secondary);
    }

    .section__label {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
      color: var(--color-accent);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: var(--space-2);
    }

    .section__title {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--space-2);
      letter-spacing: -0.01em;
    }

    .section__desc {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      line-height: var(--line-height-base);
      margin-bottom: var(--space-8);
    }

    .demo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-6);
    }

    @media (max-width: 640px) {
      .demo-grid { grid-template-columns: 1fr; }
    }

    .demo-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-6);
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-4);
    }

    .section--alt .demo-row {
      background: var(--color-bg);
    }

    .demo-row__label {
      font-size: var(--font-size-xs);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-secondary);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      min-width: 120px;
    }

    @media (max-width: 480px) {
      .demo-row { padding: var(--space-4); gap: var(--space-3); }
      .demo-row__label { min-width: unset; width: 100%; }
    }

    .demo-row__items {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      align-items: center;
    }

    .code-block {
      background: var(--color-surface-inverse);
      color: var(--color-bg);
      padding: var(--space-3) var(--space-4);
      border-radius: var(--radius-md);
      font-family: monospace;
      font-size: var(--font-size-xs);
      overflow-x: auto;
      margin-bottom: var(--space-4);
    }

    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 400px;
      aspect-ratio: 16/9;
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: var(--color-bg-secondary);
    }

    .carousel-slide {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text-secondary);
    }

    .chart-container {
      width: 100%;
      max-width: 400px;
      height: 200px;
    }
  `

  render() {
    return html`
      <app-header></app-header>

      <main>
        <section class="hero">
          <div class="container">
            <h1 class="hero__title">Components</h1>
            <p class="hero__subtitle">A comprehensive collection of reusable Web Components built with Lit</p>
          </div>
        </section>

        <div class="controls">
          <div class="controls__inner">
            <div class="category-filter">
              <button class="category-btn ${this._category === 'all' ? 'active' : ''}" @click=${() => this._category = 'all'}>All</button>
              <button class="category-btn ${this._category === 'actions' ? 'active' : ''}" @click=${() => this._category = 'actions'}>Actions</button>
              <button class="category-btn ${this._category === 'input' ? 'active' : ''}" @click=${() => this._category = 'input'}>Input</button>
              <button class="category-btn ${this._category === 'feedback' ? 'active' : ''}" @click=${() => this._category = 'feedback'}>Feedback</button>
              <button class="category-btn ${this._category === 'layout' ? 'active' : ''}" @click=${() => this._category = 'layout'}>Layout</button>
              <button class="category-btn ${this._category === 'overlay' ? 'active' : ''}" @click=${() => this._category = 'overlay'}>Overlay</button>
              <button class="category-btn ${this._category === 'navigation' ? 'active' : ''}" @click=${() => this._category = 'navigation'}>Navigation</button>
              <button class="category-btn ${this._category === 'display' ? 'active' : ''}" @click=${() => this._category = 'display'}>Display</button>
            </div>
          </div>
        </div>

        <!-- ACTIONS -->
        <section class="section">
          <div class="container">
            <p class="section__label">Actions</p>
            <h2 class="section__title">Buttons & Toggles</h2>
            <p class="section__desc">Interactive elements for user actions.</p>

            <div class="code-block">&lt;app-button variant="primary"&gt;Primary&lt;/app-button&gt;</div>

            <div class="demo-row">
              <span class="demo-row__label">Button Variants</span>
              <div class="demo-row__items">
                <app-button variant="primary">Primary</app-button>
                <app-button variant="secondary">Secondary</app-button>
                <app-button variant="ghost">Ghost</app-button>
                <app-button disabled>Disabled</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Button Group</span>
              <div class="demo-row__items">
                <app-button-group>
                  <app-button variant="primary">First</app-button>
                  <app-button variant="primary">Second</app-button>
                  <app-button variant="primary">Third</app-button>
                </app-button-group>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Toggle</span>
              <div class="demo-row__items">
                <app-toggle .pressed=${this._toggleValue === 'toggle1'} @click=${() => this._toggleValue = 'toggle1'}>Toggle 1</app-toggle>
                <app-toggle .pressed=${this._toggleValue === 'toggle2'} @click=${() => this._toggleValue = 'toggle2'}>Toggle 2</app-toggle>
                <app-toggle pressed>Pressed</app-toggle>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Toggle Group</span>
              <div class="demo-row__items">
                <app-toggle-group value=${this._toggleValue}>
                  <button value="toggle1" slot="button">Option 1</button>
                  <button value="toggle2" slot="button">Option 2</button>
                  <button value="toggle3" slot="button">Option 3</button>
                </app-toggle-group>
              </div>
            </div>
          </div>
        </section>

        <!-- INPUT -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Input</p>
            <h2 class="section__title">Form Controls</h2>
            <p class="section__desc">Various input components for data entry.</p>

            <div class="demo-row">
              <span class="demo-row__label">Text Input</span>
              <div class="demo-row__items">
                <app-input placeholder="Enter text..." .value=${this._inputValue} @input=${(e) => this._inputValue = e.target.value}></app-input>
                <app-input placeholder="With error" error></app-input>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Input Group</span>
              <div class="demo-row__items">
                <app-input-group>
                  <span slot="prefix">https://</span>
                  <input type="text" placeholder="example.com" />
                </app-input-group>
                <app-input-group>
                  <input type="text" placeholder="Search..." />
                  <span slot="suffix">🔍</span>
                </app-input-group>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Input OTP</span>
              <div class="demo-row__items">
                <app-input-otp .value=${this._otpValue} @input=${(e) => this._otpValue = e.target.value}></app-input-otp>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Textarea</span>
              <div class="demo-row__items">
                <app-textarea placeholder="Enter message..." rows="3" .value=${this._textareaValue} @input=${(e) => this._textareaValue = e.target.value}></app-textarea>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Field with Label</span>
              <div class="demo-row__items">
                <app-field>
                  <label slot="label" for="email">Email</label>
                  <input type="email" id="email" placeholder="you@example.com" />
                  <span slot="description">We'll never share your email.</span>
                </app-field>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Checkbox</span>
              <div class="demo-row__items">
                <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                  <app-checkbox></app-checkbox>
                  <span>Accept terms</span>
                </label>
                <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                  <app-checkbox checked></app-checkbox>
                  <span>Subscribe</span>
                </label>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Switch</span>
              <div class="demo-row__items">
                <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                  <app-switch .checked=${this._switchStates.sw1} @change=${(e) => this._switchStates = { ...this._switchStates, sw1: e.target.checked }}></app-switch>
                  <span>Dark mode</span>
                </label>
                <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                  <app-switch .checked=${this._switchStates.sw2} @change=${(e) => this._switchStates = { ...this._switchStates, sw2: e.target.checked }}></app-switch>
                  <span>Notifications</span>
                </label>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Radio Group</span>
              <div class="demo-row__items">
                <app-radio-group name="demo" value=${this._radioValue}>
                  <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer;margin-right:var(--space-4)">
                    <app-radio-item value="option1"></app-radio-item>
                    <span>Option 1</span>
                  </label>
                  <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                    <app-radio-item value="option2"></app-radio-item>
                    <span>Option 2</span>
                  </label>
                </app-radio-group>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Slider</span>
              <div class="demo-row__items" style="flex:1">
                <app-slider .value=${this._sliderValue} @input=${(e) => this._sliderValue = e.target.value} style="width:200px"></app-slider>
                <span>${this._sliderValue}</span>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Select</span>
              <div class="demo-row__items">
                <app-native-select .value=${this._selectValue} @change=${(e) => this._selectValue = e.target.value}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </app-native-select>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Combobox</span>
              <div class="demo-row__items">
                <app-combobox .value=${this._comboboxValue} .options=${['Red', 'Blue', 'Green', 'Yellow']}></app-combobox>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Calendar</span>
              <div class="demo-row__items">
                <app-calendar></app-calendar>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Date Picker</span>
              <div class="demo-row__items">
                <app-date-picker></app-date-picker>
              </div>
            </div>
          </div>
        </section>

        <!-- FEEDBACK -->
        <section class="section">
          <div class="container">
            <p class="section__label">Feedback</p>
            <h2 class="section__title">Alerts & Notifications</h2>
            <p class="section__desc">Components for providing feedback to users.</p>

            <div class="demo-row">
              <span class="demo-row__label">Alerts</span>
              <div class="demo-row__items" style="width:100%">
                <app-alert variant="info">Information message</app-alert>
                <app-alert variant="success">Success message</app-alert>
                <app-alert variant="warning">Warning message</app-alert>
                <app-alert variant="error" dismissible>Error message</app-alert>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Toast</span>
              <div class="demo-row__items">
                <app-button @click=${() => this.dispatchEvent(new CustomEvent('show-toast', { detail: { type: 'info', message: 'Info toast' } }))}>Show Toast</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Progress</span>
              <div class="demo-row__items" style="width:200px">
                <app-progress .value=${this._progressValue}></app-progress>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Spinner</span>
              <div class="demo-row__items">
                <app-spinner size="xs"></app-spinner>
                <app-spinner size="sm"></app-spinner>
                <app-spinner></app-spinner>
                <app-spinner size="lg"></app-spinner>
                <app-spinner size="xl"></app-spinner>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Skeleton</span>
              <div class="demo-row__items">
                <app-skeleton variant="text" style="width:200px"></app-skeleton>
                <app-skeleton variant="rectangular" style="width:100px;height:60px"></app-skeleton>
                <app-skeleton variant="circular" style="width:40px;height:40px"></app-skeleton>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Badge</span>
              <div class="demo-row__items">
                <app-badge>Default</app-badge>
                <app-badge variant="secondary">Secondary</app-badge>
                <app-badge variant="outline">Outline</app-badge>
                <app-badge variant="destructive">Destructive</app-badge>
                <app-badge dot></app-badge>
                <app-badge>5</app-badge>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Empty State</span>
              <div class="demo-row__items">
                <app-empty style="width:300px">
                  <span slot="icon">📭</span>
                  <span slot="title">No items found</span>
                  <p slot="default">Try adjusting your search or filters to find what you're looking for.</p>
                  <app-button variant="primary" slot="action">Clear filters</app-button>
                </app-empty>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Sonner (Stackable Toasts)</span>
              <div class="demo-row__items">
                <app-button @click=${() => {
                  const sonner = document.querySelector('app-sonner') || document.createElement('app-sonner')
                  if (!document.querySelector('app-sonner')) {
                    sonner.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999'
                    document.body.appendChild(sonner)
                  }
                  if (sonner.add) sonner.add('Success message', 'success')
                }}>Show Toast</app-button>
              </div>
            </div>
          </div>
        </section>

        <!-- LAYOUT -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Layout</p>
            <h2 class="section__title">Structure</h2>
            <p class="section__desc">Components for organizing layout.</p>

            <div class="demo-row">
              <span class="demo-row__label">Card</span>
              <div class="demo-row__items">
                <app-card style="width:250px">
                  <div slot="header">
                    <strong>Card Header</strong>
                  </div>
                  <p>Card content goes here.</p>
                  <div slot="footer">
                    <app-button size="sm">Action</app-button>
                  </div>
                </app-card>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Separator</span>
              <div class="demo-row__items" style="width:200px">
                <app-separator></app-separator>
                <app-divider label="Section Title"></app-divider>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Aspect Ratio</span>
              <div class="demo-row__items">
                <app-aspect-ratio ratio="16/9" style="width:150px;background:var(--color-bg-secondary)">
                  <span style="display:flex;align-items:center;justify-content:center;height:100%">16:9</span>
                </app-aspect-ratio>
                <app-aspect-ratio ratio="4/3" style="width:120px;background:var(--color-bg-secondary)">
                  <span style="display:flex;align-items:center;justify-content:center;height:100%">4:3</span>
                </app-aspect-ratio>
                <app-aspect-ratio ratio="1/1" style="width:80px;background:var(--color-bg-secondary)">
                  <span style="display:flex;align-items:center;justify-content:center;height:100%">1:1</span>
                </app-aspect-ratio>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Direction (LTR/RTL)</span>
              <div class="demo-row__items">
                <app-direction dir="ltr" style="padding:var(--space-3);background:var(--color-bg-secondary);border-radius:var(--radius-md)">
                  <span>← LTR Left to Right →</span>
                </app-direction>
                <app-direction dir="rtl" style="padding:var(--space-3);background:var(--color-bg-secondary);border-radius:var(--radius-md)">
                  <span>→ RTL Right to Left ←</span>
                </app-direction>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Resizable</span>
              <div class="demo-row__items">
                <div style="width:200px;height:100px;background:var(--color-bg-secondary);border:1px solid var(--color-border)">
                  <app-resizable style="width:100%;height:100%"></app-resizable>
                </div>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Scroll Area</span>
              <div class="demo-row__items">
                <app-scroll-area style="width:250px;height:100px">
                  <div style="padding:var(--space-4)">
                    <p>Scrollable content area with custom scrollbar styling.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>More content here...</p>
                    <p>And more...</p>
                  </div>
                </app-scroll-area>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Sidebar</span>
              <div class="demo-row__items">
                <app-button @click=${() => this.dispatchEvent(new CustomEvent('toggle-sidebar'))}>Toggle Sidebar Demo</app-button>
              </div>
            </div>
          </div>
        </section>

        <!-- OVERLAY -->
        <section class="section">
          <div class="container">
            <p class="section__label">Overlay</p>
            <h2 class="section__title">Popups & Modals</h2>
            <p class="section__desc">Components that overlay content.</p>

            <div class="demo-row">
              <span class="demo-row__label">Dialog</span>
              <div class="demo-row__items">
                <app-button variant="primary" @click=${() => this._dialogOpen = true}>Open Dialog</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Alert Dialog</span>
              <div class="demo-row__items">
                <app-button variant="secondary" @click=${() => this.dispatchEvent(new CustomEvent('show-alert-dialog'))}>Show Alert</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Drawer</span>
              <div class="demo-row__items">
                <app-button @click=${() => this._drawerOpen = true}>Open Drawer</app-button>
                <app-button @click=${() => this._drawerOpen = true}>Open Left Drawer</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Sheet</span>
              <div class="demo-row__items">
                <app-button @click=${() => this._sheetOpen = true}>Open Sheet</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Popover</span>
              <div class="demo-row__items">
                <app-popover ?open=${this._popoverOpen} @close=${() => this._popoverOpen = false}>
                  <app-button slot="trigger" variant="ghost">Click for Popover</app-button>
                  <div style="padding:var(--space-4)">
                    <strong>Popover Content</strong>
                    <p>Additional information here.</p>
                  </div>
                </app-popover>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Tooltip</span>
              <div class="demo-row__items">
                <app-tooltip content="This is a helpful tooltip">
                  <app-button variant="ghost">Hover me</app-button>
                </app-tooltip>
                <app-tooltip content="Another tooltip" placement="bottom">
                  <app-button variant="ghost">Bottom</app-button>
                </app-tooltip>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Hover Card</span>
              <div class="demo-row__items">
                <app-hover-card open-delay="0">
                  <app-button variant="ghost">Hover for card</app-button>
                  <div style="padding:var(--space-4);min-width:200px;">
                    <strong>Hover Card Content</strong>
                    <p>Rich content preview appears on hover.</p>
                  </div>
                </app-hover-card>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Command Palette</span>
              <div class="demo-row__items">
                <app-button @click=${() => this.dispatchEvent(new CustomEvent('toggle-command'))}>
                  <app-kbd>⌘</app-kbd> <app-kbd>K</app-kbd> Command
                </app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Context Menu</span>
              <div class="demo-row__items">
                <div style="padding:var(--space-4);background:var(--color-bg-secondary);border-radius:var(--radius-md)" @contextmenu=${(e) => {
                  e.preventDefault()
                  this.dispatchEvent(new CustomEvent('show-context-menu', { detail: { x: e.clientX, y: e.clientY } }))
                }}>
                  Right-click here for context menu
                </div>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Dropdown Menu</span>
              <div class="demo-row__items">
                <app-dropdown-menu>
                  <app-button slot="trigger" variant="secondary">Menu</app-button>
                  <div style="padding:var(--space-2)">
                    <a href="#" style="display:block;padding:var(--space-2) var(--space-3);text-decoration:none;color:var(--color-text);border-radius:var(--radius-md);transition:background var(--transition-fast)" @mouseover=${e => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${e => e.target.style.background = 'transparent'}>Profile</a>
                    <a href="#" style="display:block;padding:var(--space-2) var(--space-3);text-decoration:none;color:var(--color-text);border-radius:var(--radius-md);transition:background var(--transition-fast)" @mouseover=${e => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${e => e.target.style.background = 'transparent'}>Settings</a>
                    <app-divider></app-divider>
                    <a href="#" style="display:block;padding:var(--space-2) var(--space-3);text-decoration:none;color:var(--color-fill-red);transition:background var(--transition-fast)" @mouseover=${e => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${e => e.target.style.background = 'transparent'}>Logout</a>
                  </div>
                </app-dropdown-menu>
              </div>
            </div>
          </div>
        </section>

        <!-- NAVIGATION -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Navigation</p>
            <h2 class="section__title">Navigation</h2>
            <p class="section__desc">Components for navigation.</p>

            <div class="demo-row">
              <span class="demo-row__label">Breadcrumb</span>
              <div class="demo-row__items">
                <app-breadcrumb>
                  <a href="#components">Components</a>
                  <a href="#">Category</a>
                  <span>Current Page</span>
                </app-breadcrumb>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Pagination</span>
              <div class="demo-row__items">
                <app-pagination page="5" totalPages="10"></app-pagination>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Tabs</span>
              <div class="demo-row__items">
                <app-tabs value=${this._tabValue}>
                  <button value="tab1" slot="tab">Overview</button>
                  <button value="tab2" slot="tab">Features</button>
                  <button value="tab3" slot="tab">Pricing</button>
                  <div slot="panel">
                    <p>Overview content here...</p>
                  </div>
                  <div slot="panel">
                    <p>Features content here...</p>
                  </div>
                  <div slot="panel">
                    <p>Pricing content here...</p>
                  </div>
                </app-tabs>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Navigation Menu</span>
              <div class="demo-row__items">
                <app-navigation-menu value="home">
                  <a href="#" slot="item" class="nav-item" data-value="home">🏠 Home</a>
                  <a href="#components" slot="item" class="nav-item" data-value="components">📦 Components</a>
                  <a href="#docs" slot="item" class="nav-item" data-value="docs">📚 Docs</a>
                </app-navigation-menu>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Menubar</span>
              <div class="demo-row__items" style="width:100%">
                <app-menubar value="file">
                  <div class="menu-item">
                    <button class="menu-trigger">File</button>
                    <div class="dropdown">
                      <button class="dropdown-item" data-value="new">New</button>
                      <button class="dropdown-item" data-value="open">Open</button>
                      <button class="dropdown-item" data-value="save">Save</button>
                    </div>
                  </div>
                  <div class="menu-item">
                    <button class="menu-trigger">Edit</button>
                    <div class="dropdown">
                      <button class="dropdown-item" data-value="undo">Undo</button>
                      <button class="dropdown-item" data-value="redo">Redo</button>
                    </div>
                  </div>
                  <div class="menu-item">
                    <button class="menu-trigger">View</button>
                    <div class="dropdown">
                      <button class="dropdown-item" data-value="zoom-in">Zoom In</button>
                      <button class="dropdown-item" data-value="zoom-out">Zoom Out</button>
                    </div>
                  </div>
                </app-menubar>
              </div>
            </div>
          </div>
        </section>

        <!-- DATA DISPLAY -->
        <section class="section">
          <div class="container">
            <p class="section__label">Display</p>
            <h2 class="section__title">Data Display</h2>
            <p class="section__desc">Components for displaying data.</p>

            <div class="demo-row">
              <span class="demo-row__label">Avatar</span>
              <div class="demo-row__items">
                <app-avatar fallback="AB" size="xs"></app-avatar>
                <app-avatar fallback="SM" size="sm"></app-avatar>
                <app-avatar fallback="MD" size="md"></app-avatar>
                <app-avatar fallback="LG" size="lg"></app-avatar>
                <app-avatar fallback="XL" size="xl"></app-avatar>
                <app-avatar fallback="2X" size="2xl"></app-avatar>
                <app-avatar fallback="OK" size="lg" ring></app-avatar>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Avatar Group</span>
              <div class="demo-row__items">
                <div style="display:flex">
                  <app-avatar fallback="AB" size="md"></app-avatar>
                  <app-avatar fallback="CD" size="md" style="margin-left:-8px;border:2px solid var(--color-bg)"></app-avatar>
                  <app-avatar fallback="EF" size="md" style="margin-left:-8px;border:2px solid var(--color-bg)"></app-avatar>
                  <app-avatar fallback="+5" size="md" style="margin-left:-8px;border:2px solid var(--color-bg)"></app-avatar>
                </div>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Item</span>
              <div class="demo-row__items">
                <app-item>
                  <span slot="leading">📄</span>
                  Document item with trailing action
                  <app-button slot="trailing" size="sm" variant="ghost">→</app-button>
                </app-item>
                <app-item disabled>
                  <span slot="leading">🔒</span>
                  Disabled item
                </app-item>
                <app-item selected>
                  <span slot="leading">✓</span>
                  Selected item
                </app-item>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Typography</span>
              <div class="demo-row__items" style="flex-direction:column;align-items:flex-start">
                <app-typography variant="h1">Heading 1</app-typography>
                <app-typography variant="h2">Heading 2</app-typography>
                <app-typography variant="h3">Heading 3</app-typography>
                <app-typography variant="h4">Heading 4</app-typography>
                <app-typography variant="lead">Lead paragraph for introductions</app-typography>
                <app-typography variant="body">Body text for regular content</app-typography>
                <app-typography variant="small">Small text for secondary information</app-typography>
                <app-typography variant="muted">Muted text for subtle hints</app-typography>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Kbd</span>
              <div class="demo-row__items">
                <app-kbd>⌘</app-kbd><app-kbd>K</app-kbd>
                <span style="margin:0 var(--space-2)">|</span>
                <app-kbd>Ctrl</app-kbd>+<app-kbd>C</app-kbd>
                <span style="margin:0 var(--space-2)">|</span>
                <app-kbd>Esc</app-kbd>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Table</span>
              <div class="demo-row__items">
                <app-table striped bordered>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doe</td>
                        <td>Admin</td>
                        <td><app-badge variant="success">Active</app-badge></td>
                      </tr>
                      <tr>
                        <td>Jane Smith</td>
                        <td>User</td>
                        <td><app-badge variant="secondary">Inactive</app-badge></td>
                      </tr>
                    </tbody>
                  </table>
                </app-table>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Data Table</span>
              <div class="demo-row__items" style="width:100%">
                <app-data-table
                  .data=${[
                    { name: 'Alice', age: 25, role: 'Designer' },
                    { name: 'Bob', age: 30, role: 'Developer' },
                    { name: 'Charlie', age: 28, role: 'Manager' },
                    { name: 'Diana', age: 32, role: 'Designer' }
                  ]}
                  .columns=${[
                    { key: 'name', label: 'Name' },
                    { key: 'age', label: 'Age' },
                    { key: 'role', label: 'Role' }
                  ]}
                ></app-data-table>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Carousel</span>
              <div class="demo-row__items">
                <div class="carousel-container">
                  ${[0, 1, 2].map(i => html`
                    <div class="carousel-slide" style="display:${i === this._carouselIndex ? 'flex' : 'none'}">Slide ${i + 1}</div>
                  `)}
                  <div style="position:absolute;bottom:var(--space-4);left:50%;transform:translateX(-50%);display:flex;gap:var(--space-2)">
                    <app-button size="sm" variant="ghost" @click=${() => this._carouselIndex = Math.max(0, this._carouselIndex - 1)}>←</app-button>
                    <app-button size="sm" variant="ghost" @click=${() => this._carouselIndex = Math.min(2, this._carouselIndex + 1)}>→</app-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Chart</span>
              <div class="demo-row__items">
                <div class="chart-container">
                  <app-chart type="bar" .data=${[10, 25, 15, 30, 20]}></app-chart>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- DISCLOSURE -->
        <section class="section section--alt">
          <div class="container">
            <p class="section__label">Disclosure</p>
            <h2 class="section__title">Collapsible</h2>
            <p class="section__desc">Expandable content components.</p>

            <div class="demo-row" style="display:block">
              <app-accordion open>
                <span slot="header">What is an accordion?</span>
                <p>An accordion is a vertically stacked list of items that can be expanded or collapsed.</p>
              </app-accordion>
              <app-accordion>
                <span slot="header">How do I use it?</span>
                <p>Use the <code>open</code> attribute to control the expanded state.</p>
              </app-accordion>
              <app-accordion disabled>
                <span slot="header">Disabled accordion</span>
                <p>This accordion is disabled and cannot be interacted with.</p>
              </app-accordion>
            </div>

            <div class="demo-row" style="display:block;margin-top:var(--space-4)">
              <app-collapsible open>
                <p><strong>Simple Collapsible</strong> - No header button, just expandable content area.</p>
              </app-collapsible>
            </div>
          </div>
        </section>

      </main>

      <!-- Dialog Overlay -->
      <app-dialog title="Dialog Example" ?open=${this._dialogOpen} @close=${() => this._dialogOpen = false}>
        <p>This is a dialog component. You can put any content here including forms, lists, or other components.</p>
        <div slot="footer" style="display:flex;gap:var(--space-3);justify-content:flex-end">
          <app-button variant="ghost" @click=${() => this._dialogOpen = false}>Cancel</app-button>
          <app-button variant="primary" @click=${() => this._dialogOpen = false}>Confirm</app-button>
        </div>
      </app-dialog>

      <!-- Drawer Overlay -->
      <app-drawer ?open=${this._drawerOpen} @close=${() => this._drawerOpen = false}>
        <div style="padding:var(--space-6)">
          <h2 style="font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);margin-bottom:var(--space-4)">Navigation</h2>
          <nav style="display:flex;flex-direction:column;gap:var(--space-2)">
            <a href="#components" style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);border-radius:var(--radius-md);text-decoration:none;color:var(--color-text);transition:background var(--transition-fast)" @mouseover=${(e) => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${(e) => e.target.style.background = 'transparent'}>
              <span>🏠</span> Home
            </a>
            <a href="#components" style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);border-radius:var(--radius-md);text-decoration:none;color:var(--color-text);transition:background var(--transition-fast)" @mouseover=${(e) => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${(e) => e.target.style.background = 'transparent'}>
              <span>📦</span> Components
            </a>
            <a href="#docs" style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);border-radius:var(--radius-md);text-decoration:none;color:var(--color-text);transition:background var(--transition-fast)" @mouseover=${(e) => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${(e) => e.target.style.background = 'transparent'}>
              <span>📚</span> Documentation
            </a>
            <a href="#github" style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);border-radius:var(--radius-md);text-decoration:none;color:var(--color-text);transition:background var(--transition-fast)" @mouseover=${(e) => e.target.style.background = 'var(--color-bg-secondary)'} @mouseout=${(e) => e.target.style.background = 'transparent'}>
              <span>⚡</span> GitHub
            </a>
          </nav>
          <app-divider></app-divider>
          <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Slide-out panel for additional content and navigation.</p>
        </div>
      </app-drawer>

      <!-- Sheet Overlay -->
      <app-sheet ?open=${this._sheetOpen} @close=${() => this._sheetOpen = false}>
        <div style="padding:var(--space-6)">
          <h3 style="font-size:var(--font-size-lg);font-weight:var(--font-weight-semibold);margin-bottom:var(--space-4)">Sheet Content</h3>
          <p style="color:var(--color-text-secondary);margin-bottom:var(--space-4)">A slide-up panel from the bottom.</p>
          <div style="display:flex;gap:var(--space-3);justify-content:flex-end">
            <app-button variant="ghost" @click=${() => this._sheetOpen = false}>Cancel</app-button>
            <app-button variant="primary" @click=${() => this._sheetOpen = false}>Confirm</app-button>
          </div>
        </div>
      </app-sheet>
    `
  }
}

customElements.define('app-components', AppComponents)
