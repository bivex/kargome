/**
 * Vite plugin to remove console.log statements in production
 */

export function removeConsolePlugin() {
  return {
    name: 'remove-console',
    transform(code) {
      return code.replace(/console\.(log|warn|info|debug|table)\([^)]*\);?/g, '')
    },
  }
}
