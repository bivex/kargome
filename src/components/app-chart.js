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

class AppChart extends LitElement {
  static properties = {
    type: { type: String },
    data: { type: Array },
    labels: { type: Array },
  }

  constructor() {
    super()
    this.type = 'line'
    this.data = []
    this.labels = []
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
    }

    .chart-container {
      width: 100%;
      height: 300px;
      position: relative;
    }

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .axis line,
    .axis path {
      stroke: var(--color-border);
      stroke-width: 1;
    }

    .axis text {
      fill: var(--color-text-secondary);
      font-size: var(--font-size-xs);
      font-family: var(--font-family);
    }

    .grid-line {
      stroke: var(--color-bg-secondary);
      stroke-width: 1;
      stroke-dasharray: 4 4;
    }

    .chart-line {
      fill: none;
      stroke: var(--color-accent);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .chart-area {
      fill: color-mix(in srgb, var(--color-accent) 10%, transparent);
    }

    .chart-bar {
      fill: var(--color-accent);
      transition: fill var(--transition-fast);
    }

    .chart-bar:hover {
      fill: var(--color-accent-hover);
    }

    .chart-pie-slice {
      transition: opacity var(--transition-fast);
      cursor: pointer;
    }

    .chart-pie-slice:hover {
      opacity: 0.8;
    }

    .data-point {
      fill: var(--color-bg);
      stroke: var(--color-accent);
      stroke-width: 2;
      transition: r var(--transition-fast);
    }

    .data-point:hover {
      r: 6;
    }
  `

  render() {
    return html`
      <div class="chart-container">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
          ${this.type === 'line' ? this.renderLineChart() :
            this.type === 'bar' ? this.renderBarChart() :
            this.type === 'pie' ? this.renderPieChart() :
            this.renderLineChart()}
        </svg>
      </div>
    `
  }

  renderLineChart() {
    if (!this.data.length) return html`<text x="200" y="150" text-anchor="middle" fill="var(--color-text-secondary)">No data available</text>`

    const width = 400
    const height = 300
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    const maxVal = Math.max(...this.data)
    const minVal = Math.min(...this.data)
    const range = maxVal - minVal || 1

    const points = this.data.map((val, i) => {
      const x = padding + (i / (this.data.length - 1 || 1)) * chartWidth
      const y = height - padding - ((val - minVal) / range) * chartHeight
      return `${x},${y}`
    }).join(' ')

    const areaPoints = `${padding},${height - padding} ${points} ${padding + chartWidth},${height - padding}`

    return html`
      <g class="grid">
        ${[0, 1, 2, 3, 4].map(i => {
          const y = padding + (i / 4) * chartHeight
          return html`<line class="grid-line" x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" />`
        })}
      </g>

      <polygon class="chart-area" points="${areaPoints}" />
      <polyline class="chart-line" points="${points}" />

      <g class="data-points">
        ${this.data.map((val, i) => {
          const x = padding + (i / (this.data.length - 1 || 1)) * chartWidth
          const y = height - padding - ((val - minVal) / range) * chartHeight
          return html`<circle class="data-point" cx="${x}" cy="${y}" r="4" />`
        })}
      </g>
    `
  }

  renderBarChart() {
    if (!this.data.length) return html`<text x="200" y="150" text-anchor="middle" fill="var(--color-text-secondary)">No data available</text>`

    const width = 400
    const height = 300
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    const maxVal = Math.max(...this.data)
    const barWidth = (chartWidth / this.data.length) * 0.8
    const gap = (chartWidth / this.data.length) * 0.2

    return html`
      <g class="grid">
        ${[0, 1, 2, 3, 4].map(i => {
          const y = padding + (i / 4) * chartHeight
          return html`<line class="grid-line" x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" />`
        })}
      </g>

      <g class="bars">
        ${this.data.map((val, i) => {
          const barHeight = (val / maxVal) * chartHeight
          const x = padding + i * (barWidth + gap) + gap / 2
          const y = height - padding - barHeight
          return html`<rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="2" />`
        })}
      </g>
    `
  }

  renderPieChart() {
    if (!this.data.length) return html`<text x="200" y="150" text-anchor="middle" fill="var(--color-text-secondary)">No data available</text>`

    const cx = 200
    const cy = 150
    const radius = 100

    const total = this.data.reduce((sum, val) => sum + val, 0)
    const colors = [
      'var(--color-accent)',
      'var(--color-fill-blue)',
      'var(--color-fill-green)',
      'var(--color-fill-red)',
      'var(--color-text-secondary)'
    ]

    let currentAngle = -90

    return html`
      <g class="slices">
        ${this.data.map((val, i) => {
          const sliceAngle = (val / total) * 360
          const startAngle = currentAngle
          const endAngle = currentAngle + sliceAngle

          const x1 = cx + radius * Math.cos(startAngle * Math.PI / 180)
          const y1 = cy + radius * Math.sin(startAngle * Math.PI / 180)
          const x2 = cx + radius * Math.cos(endAngle * Math.PI / 180)
          const y2 = cy + radius * Math.sin(endAngle * Math.PI / 180)

          const largeArc = sliceAngle > 180 ? 1 : 0

          const pathData = sliceAngle >= 360
            ? `M ${cx - radius} ${cy} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 -${radius * 2} 0`
            : `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`

          currentAngle = endAngle

          return html`<path class="chart-pie-slice" d="${pathData}" fill="${colors[i % colors.length]}" />`
        })}
      </g>
    `
  }
}

customElements.define('app-chart', AppChart)
