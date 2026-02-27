#!/usr/bin/env node
/**
 * Copyright (c) 2026 Bivex
 *
 * Author: Bivex
 * Available for contact via email: support@b-b.top
 * For up-to-date contact information:
 * https://github.com/bivex
 *
 * Created: 2026-02-27 21:31
 * Last Updated: 2026-02-27 21:31
 *
 * Licensed under the MIT License.
 * Commercial licensing available upon request.
 */

/**
 * build-tokens.js
 * Runs design-tokens-cli for light + dark token sets,
 * then assembles src/styles/tokens.css with proper
 * light/:root, dark media query, and [data-theme] selectors.
 */

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const cli = path.join(root, 'tools/design-tokens-cli/index.js')

const run = (config) => {
  execSync(`node ${cli} transform ${config}`, { cwd: root, stdio: 'inherit' })
}

// 1. Generate CSS for all themes
run('design-tokens/kargome-light.config.json')
run('design-tokens/kargome-dark.config.json')
run('design-tokens/kargome-spring.config.json')

// 2. Read generated files
const lightCss  = readFileSync(path.join(root, 'design-tokens/generated/kargome-light.tokens.css'),  'utf-8')
const darkCss   = readFileSync(path.join(root, 'design-tokens/generated/kargome-dark.tokens.css'),   'utf-8')
const springCss = readFileSync(path.join(root, 'design-tokens/generated/kargome-spring.tokens.css'), 'utf-8')

// 3. Extract variable block from :root { ... }
const extractVars = (css) => {
  const match = css.match(/:root\s*\{([\s\S]*?)\}/)
  return match ? match[1] : ''
}

const lightVars  = extractVars(lightCss)
const darkVars   = extractVars(darkCss)
const springVars = extractVars(springCss)

// 4. Assemble final tokens.css
const output = `/* ─────────────────────────────────────────────────────
 * Auto-generated — do not edit directly.
 * Sources: design-tokens/kargome-light/
 *          design-tokens/kargome-dark/
 *          design-tokens/kargome-spring/
 * Regenerate: bun run tokens
 * ───────────────────────────────────────────────────── */

/* Light (default) */
:root {
${lightVars}}

/* System dark — only when no explicit [data-theme] override */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]):not([data-theme="spring"]) {
${darkVars}  }
}

/* Explicit dark */
:root[data-theme="dark"] {
${darkVars}}

/* Explicit light — forces light even if system is dark */
:root[data-theme="light"] {
${lightVars}}

/* Spring & sunshine */
:root[data-theme="spring"] {
${springVars}}
`

const out = path.join(root, 'src/styles/tokens.css')
writeFileSync(out, output)
console.log('✓ src/styles/tokens.css generated (light · dark · spring)')
