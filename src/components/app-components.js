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
    _toastOpen: { state: true },
    _switchStates: { state: true },
    _radioValue: { state: true },
    _sliderValue: { state: true },
    _tabValue: { state: true },
    _progressValue: { state: true },
    _toggleValue: { state: true },
    _inputValue: { state: true },
    _textareaValue: { state: true },
  }

  constructor() {
    super()
    this._category = 'all'
    this._dialogOpen = false
    this._drawerOpen = false
    this._toastOpen = true
    this._switchStates = { sw1: false, sw2: true }
    this._radioValue = 'option1'
    this._sliderValue = 50
    this._tabValue = 'tab1'
    this._progressValue = 60
    this._toggleValue = 'toggle1'
    this._inputValue = ''
    this._textareaValue = ''
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
      min-width: 100px;
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
              <span class="demo-row__label">Variants</span>
              <div class="demo-row__items">
                <app-button variant="primary">Primary</app-button>
                <app-button variant="secondary">Secondary</app-button>
                <app-button variant="ghost">Ghost</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Toggle</span>
              <div class="demo-row__items">
                <app-toggle .pressed=${this._toggleValue === 'toggle1'} @click=${() => this._toggleValue = 'toggle1'}>Toggle 1</app-toggle>
                <app-toggle .pressed=${this._toggleValue === 'toggle2'} @click=${() => this._toggleValue = 'toggle2'}>Toggle 2</app-toggle>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Toggle Group</span>
              <div class="demo-row__items">
                <app-toggle-group value=${this._toggleValue}>
                  <button value="toggle1">Option 1</button>
                  <button value="toggle2">Option 2</button>
                  <button value="toggle3">Option 3</button>
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
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Checkbox</span>
              <div class="demo-row__items">
                <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                  <app-checkbox></app-checkbox>
                  <span>Accept terms</span>
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
              <span class="demo-row__label">Slider</span>
              <div class="demo-row__items" style="flex:1">
                <app-slider .value=${this._sliderValue} @input=${(e) => this._sliderValue = e.target.value} style="width:200px"></app-slider>
                <span>${this._sliderValue}</span>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Progress</span>
              <div class="demo-row__items" style="width:200px">
                <app-progress .value=${this._progressValue}></app-progress>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Textarea</span>
              <div class="demo-row__items">
                <app-textarea placeholder="Enter message..." rows="3" .value=${this._textareaValue} @input=${(e) => this._textareaValue = e.target.value}></app-textarea>
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
              <span class="demo-row__label">Spinner</span>
              <div class="demo-row__items">
                <app-spinner size="sm"></app-spinner>
                <app-spinner></app-spinner>
                <app-spinner size="lg"></app-spinner>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Skeleton</span>
              <div class="demo-row__items">
                <app-skeleton variant="text"></app-skeleton>
                <app-skeleton variant="rectangular" style="width:100px;height:100px"></app-skeleton>
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
                <app-card style="width:200px">
                  <div slot="header">Card Header</div>
                  <p>Card content goes here.</p>
                  <div slot="footer">Card Footer</div>
                </app-card>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Separator</span>
              <div class="demo-row__items" style="width:200px">
                <app-separator></app-separator>
                <app-divider label="Section"></app-divider>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Aspect Ratio</span>
              <div class="demo-row__items">
                <app-aspect-ratio ratio="16/9" style="width:150px;background:var(--color-bg-secondary)">
                  <span style="display:flex;align-items:center;justify-content:center;height:100%">16:9</span>
                </app-aspect-ratio>
                <app-aspect-ratio ratio="1/1" style="width:80px;background:var(--color-bg-secondary)">
                  <span style="display:flex;align-items:center;justify-content:center;height:100%">1:1</span>
                </app-aspect-ratio>
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
              <span class="demo-row__label">Drawer</span>
              <div class="demo-row__items">
                <app-button variant="secondary" @click=${() => this._drawerOpen = true}>Open Drawer</app-button>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Tooltip</span>
              <div class="demo-row__items">
                <app-tooltip content="This is a tooltip">
                  <app-button variant="ghost">Hover me</app-button>
                </app-tooltip>
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
                  <span>Current</span>
                </app-breadcrumb>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Pagination</span>
              <div class="demo-row__items">
                <app-pagination page="3" totalPages="10"></app-pagination>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Tabs</span>
              <div class="demo-row__items">
                <app-tabs value=${this._tabValue}>
                  <button value="tab1" slot="tab">Tab 1</button>
                  <button value="tab2" slot="tab">Tab 2</button>
                  <button value="tab3" slot="tab">Tab 3</button>
                  <div slot="panel">Content 1</div>
                  <div slot="panel">Content 2</div>
                  <div slot="panel">Content 3</div>
                </app-tabs>
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
                <app-avatar fallback="XS" size="xs"></app-avatar>
                <app-avatar fallback="SM" size="sm"></app-avatar>
                <app-avatar fallback="MD" size="md"></app-avatar>
                <app-avatar fallback="LG" size="lg"></app-avatar>
                <app-avatar fallback="XL" size="xl" ring></app-avatar>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Item</span>
              <div class="demo-row__items">
                <app-item>
                  <span slot="leading">📄</span>
                  Document item
                  <span slot="trailing">→</span>
                </app-item>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Typography</span>
              <div class="demo-row__items">
                <app-typography variant="h1">Heading 1</app-typography>
                <app-typography variant="h2">Heading 2</app-typography>
                <app-typography variant="body">Body text</app-typography>
                <app-typography variant="small">Small text</app-typography>
              </div>
            </div>

            <div class="demo-row">
              <span class="demo-row__label">Kbd</span>
              <div class="demo-row__items">
                <app-kbd>⌘</app-kbd><app-kbd>K</app-kbd>
                <span style="margin:0 var(--space-2)">|</span>
                <app-kbd>Ctrl</app-kbd>+<app-kbd>C</app-kbd>
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
                <span slot="header">First item</span>
                <p>Content for the first accordion item.</p>
              </app-accordion>
              <app-accordion>
                <span slot="header">Second item</span>
                <p>Content for the second accordion item.</p>
              </app-accordion>
            </div>
          </div>
        </section>

      </main>

      <!-- Dialog Overlay -->
      <app-dialog title="Dialog Title" ?open=${this._dialogOpen} @close=${() => this._dialogOpen = false}>
        <p>This is a dialog component. You can put any content here.</p>
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
          <app-divider style="margin:var(--space-4) 0"></app-divider>
          <p style="font-size:var(--font-size-sm);color:var(--color-text-secondary)">Slide-out panel for additional content and navigation.</p>
        </div>
      </app-drawer>
    `
  }
}

customElements.define('app-components', AppComponents)
