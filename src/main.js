/**
 * Copyright (c) 2026 Bivex
 *
 * Author: Bivex
 * Available for contact via email: support@b-b.top
 * For up-to-date contact information:
 * https://github.com/bivex
 *
 * Created: 2026-02-27 20:48
 * Last Updated: 2026-02-27 20:48
 *
 * Licensed under the MIT License.
 * Commercial licensing available upon request.
 */

import './styles/main.css'
import './components/app-shell.js'
import './components/app-components.js'

// Simple client-side routing based on URL query param
const params = new URLSearchParams(window.location.search)
const page = params.get('page')

// Clear the page and mount the appropriate component
const mountApp = (pageName) => {
  document.body.innerHTML = ''

  if (pageName === 'components') {
    document.body.innerHTML = '<app-components></app-components>'
  } else {
    document.body.innerHTML = '<app-shell></app-shell>'
  }
}

mountApp(page)

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search)
  mountApp(params.get('page'))
})
