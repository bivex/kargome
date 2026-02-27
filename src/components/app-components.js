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

// Import all components
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

const COMPONENTS = [
  { name: 'Accordion', tag: 'app-accordion', category: 'Disclosure', desc: 'Collapsible content panels' },
  { name: 'Alert', tag: 'app-alert', category: 'Feedback', desc: 'Color-coded alert messages' },
  { name: 'Alert Dialog', tag: 'app-alert-dialog', category: 'Overlay', desc: 'Modal dialog with actions' },
  { name: 'Aspect Ratio', tag: 'app-aspect-ratio', category: 'Layout', desc: 'Maintains consistent ratios' },
  { name: 'Avatar', tag: 'app-avatar', category: 'Data Display', desc: 'User avatars with initials' },
  { name: 'Badge', tag: 'app-badge', category: 'Data Display', desc: 'Small status indicator' },
  { name: 'Breadcrumb', tag: 'app-breadcrumb', category: 'Navigation', desc: 'Navigation breadcrumb' },
  { name: 'Button', tag: 'app-button', category: 'Actions', desc: 'Button component' },
  { name: 'Button Group', tag: 'app-button-group', category: 'Actions', desc: 'Groups buttons together' },
  { name: 'Calendar', tag: 'app-calendar', category: 'Input', desc: 'Date calendar picker' },
  { name: 'Card', tag: 'app-card', category: 'Layout', desc: 'Container component' },
  { name: 'Carousel', tag: 'app-carousel', category: 'Data Display', desc: 'Image/content slider' },
  { name: 'Chart', tag: 'app-chart', category: 'Data Display', desc: 'SVG chart visualization' },
  { name: 'Checkbox', tag: 'app-checkbox', category: 'Input', desc: 'Form checkbox' },
  { name: 'Collapsible', tag: 'app-collapsible', category: 'Disclosure', desc: 'Simple collapsible panel' },
  { name: 'Combobox', tag: 'app-combobox', category: 'Input', desc: 'Input with text filtering' },
  { name: 'Command', tag: 'app-command', category: 'Overlay', desc: 'Command palette search' },
  { name: 'Context Menu', tag: 'app-context-menu', category: 'Overlay', desc: 'Right-click menu' },
  { name: 'Data Table', tag: 'app-data-table', category: 'Data Display', desc: 'Advanced data table' },
  { name: 'Date Picker', tag: 'app-date-picker', category: 'Input', desc: 'Date input with calendar' },
  { name: 'Dialog', tag: 'app-dialog', category: 'Overlay', desc: 'General purpose modal' },
  { name: 'Direction', tag: 'app-direction', category: 'Layout', desc: 'LTR/RTL support' },
  { name: 'Divider', tag: 'app-divider', category: 'Layout', desc: 'Visual divider with label' },
  { name: 'Drawer', tag: 'app-drawer', category: 'Overlay', desc: 'Slide-out side panel' },
  { name: 'Dropdown Menu', tag: 'app-dropdown-menu', category: 'Navigation', desc: 'Dropdown with items' },
  { name: 'Empty', tag: 'app-empty', category: 'Feedback', desc: 'Empty state placeholder' },
  { name: 'Field', tag: 'app-field', category: 'Input', desc: 'Form field wrapper' },
  { name: 'Hover Card', tag: 'app-hover-card', category: 'Overlay', desc: 'Card on hover' },
  { name: 'Input', tag: 'app-input', category: 'Input', desc: 'Text input component' },
  { name: 'Input Group', tag: 'app-input-group', category: 'Input', desc: 'Input with addons' },
  { name: 'Input OTP', tag: 'app-input-otp', category: 'Input', desc: 'One-time password input' },
  { name: 'Item', tag: 'app-item', category: 'Data Display', desc: 'List item component' },
  { name: 'Kbd', tag: 'app-kbd', category: 'Data Display', desc: 'Keyboard key styling' },
  { name: 'Label', tag: 'app-label', category: 'Input', desc: 'Form label' },
  { name: 'Menubar', tag: 'app-menubar', category: 'Navigation', desc: 'Horizontal menu bar' },
  { name: 'Native Select', tag: 'app-native-select', category: 'Input', desc: 'Styled native select' },
  { name: 'Navigation Menu', tag: 'app-navigation-menu', category: 'Navigation', desc: 'Main navigation' },
  { name: 'Pagination', tag: 'app-pagination', category: 'Navigation', desc: 'Pagination controls' },
  { name: 'Popover', tag: 'app-popover', category: 'Overlay', desc: 'Floating content container' },
  { name: 'Progress', tag: 'app-progress', category: 'Feedback', desc: 'Linear progress bar' },
  { name: 'Radio Group', tag: 'app-radio-group', category: 'Input', desc: 'Radio button group' },
  { name: 'Resizable', tag: 'app-resizable', category: 'Layout', desc: 'Resizable panel' },
  { name: 'Scroll Area', tag: 'app-scroll-area', category: 'Layout', desc: 'Custom scrollable area' },
  { name: 'Select', tag: 'app-select', category: 'Input', desc: 'Custom select dropdown' },
  { name: 'Separator', tag: 'app-separator', category: 'Layout', desc: 'Visual divider line' },
  { name: 'Sheet', tag: 'app-sheet', category: 'Overlay', desc: 'Slide-up panel' },
  { name: 'Sidebar', tag: 'app-sidebar', category: 'Layout', desc: 'Collapsible sidebar' },
  { name: 'Skeleton', tag: 'app-skeleton', category: 'Feedback', desc: 'Loading placeholder' },
  { name: 'Slider', tag: 'app-slider', category: 'Input', desc: 'Range slider' },
  { name: 'Sonner', tag: 'app-sonner', category: 'Feedback', desc: 'Stackable toasts' },
  { name: 'Spinner', tag: 'app-spinner', category: 'Feedback', desc: 'Loading spinner' },
  { name: 'Switch', tag: 'app-switch', category: 'Input', desc: 'Toggle switch' },
  { name: 'Table', tag: 'app-table', category: 'Data Display', desc: 'Simple table wrapper' },
  { name: 'Tabs', tag: 'app-tabs', category: 'Navigation', desc: 'Tab navigation' },
  { name: 'Textarea', tag: 'app-textarea', category: 'Input', desc: 'Multi-line text input' },
  { name: 'Toast', tag: 'app-toast', category: 'Feedback', desc: 'Toast notification' },
  { name: 'Toggle', tag: 'app-toggle', category: 'Actions', desc: 'Toggle button' },
  { name: 'Toggle Group', tag: 'app-toggle-group', category: 'Actions', desc: 'Toggle button group' },
  { name: 'Tooltip', tag: 'app-tooltip', category: 'Overlay', desc: 'Tooltip on hover/focus' },
  { name: 'Typography', tag: 'app-typography', category: 'Typography', desc: 'Text components' },
]

const CATEGORIES = [...new Set(COMPONENTS.map(c => c.category))]

class AppComponents extends LitElement {
  static properties = {
    _search: { state: true },
    _category: { state: true },
  }

  constructor() {
    super()
    this._search = ''
    this._category = 'All'
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

    .hero__stats {
      display: inline-flex;
      gap: var(--space-6);
      margin-top: var(--space-8);
      padding: var(--space-4) var(--space-6);
      background: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
    }

    .stat {
      text-align: center;
    }

    .stat__value {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--color-accent);
    }

    .stat__label {
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
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

    .search-box {
      flex: 1;
      min-width: 200px;
    }

    .search-box input {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      font-size: var(--font-size-sm);
      background: var(--color-bg);
      color: var(--color-text);
    }

    .search-box input:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
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

    .section__title {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      margin-bottom: var(--space-4);
      color: var(--color-text);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: var(--space-4);
    }

    @media (max-width: 640px) {
      .grid { grid-template-columns: 1fr; }
    }

    .card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-5);
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }

    .card:hover {
      border-color: var(--color-accent);
      box-shadow: var(--shadow-md);
    }

    .card__head {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: var(--space-3);
    }

    .card__name {
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--color-text);
    }

    .card__tag {
      font-size: var(--font-size-xs);
      padding: 2px var(--space-2);
      border-radius: var(--radius-sm);
      background: color-mix(in srgb, var(--color-accent) 10%, transparent);
      color: var(--color-accent);
      font-weight: var(--font-weight-medium);
    }

    .card__code {
      font-family: monospace;
      font-size: var(--font-size-xs);
      color: var(--color-text-secondary);
      margin-bottom: var(--space-2);
    }

    .card__desc {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      line-height: var(--line-height-base);
    }

    .empty {
      text-align: center;
      padding: var(--space-16);
      color: var(--color-text-secondary);
    }
  `

  render() {
    const filtered = COMPONENTS.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(this._search.toLowerCase()) ||
                         c.tag.toLowerCase().includes(this._search.toLowerCase()) ||
                         c.desc.toLowerCase().includes(this._search.toLowerCase())
      const matchCategory = this._category === 'All' || c.category === this._category
      return matchSearch && matchCategory
    })

    return html`
      <app-header></app-header>

      <main>
        <section class="hero">
          <div class="container">
            <h1 class="hero__title">Components</h1>
            <p class="hero__subtitle">A comprehensive collection of reusable Web Components built with Lit</p>
            <div class="hero__stats">
              <div class="stat">
                <div class="stat__value">${COMPONENTS.length}</div>
                <div class="stat__label">Components</div>
              </div>
              <div class="stat">
                <div class="stat__value">${CATEGORIES.length}</div>
                <div class="stat__label">Categories</div>
              </div>
            </div>
          </div>
        </section>

        <div class="controls">
          <div class="controls__inner">
            <div class="search-box">
              <input
                type="text"
                placeholder="Search components..."
                .value=${this._search}
                @input=${(e) => this._search = e.target.value}
              />
            </div>
            <div class="category-filter">
              <button class="category-btn ${this._category === 'All' ? 'active' : ''}" @click=${() => this._category = 'All'}>All</button>
              ${CATEGORIES.map(cat => html`
                <button class="category-btn ${this._category === cat ? 'active' : ''}" @click=${() => this._category = cat}>${cat}</button>
              `)}
            </div>
          </div>
        </div>

        <section class="section">
          <div class="container">
            ${filtered.length === 0 ? html`
              <div class="empty">No components found matching "${this._search}"</div>
            ` : html`
              <div class="grid">
                ${filtered.map(comp => html`
                  <div class="card">
                    <div class="card__head">
                      <div>
                        <div class="card__name">${comp.name}</div>
                        <div class="card__code">&lt;${comp.tag}&gt;</div>
                      </div>
                      <span class="card__tag">${comp.category}</span>
                    </div>
                    <p class="card__desc">${comp.desc}</p>
                  </div>
                `)}
              </div>
            `}
          </div>
        </section>
      </main>
    `
  }
}

customElements.define('app-components', AppComponents)
