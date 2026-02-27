import { defineConfig } from 'vite'

const securityHeaders = {
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
}

export default defineConfig({
  server: { headers: securityHeaders },
  preview: { headers: securityHeaders },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: { chrome: 100, firefox: 100, safari: 16 },
    },
  },
  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        entryFileNames: '[name].built.js',
        chunkFileNames: '[name].built.js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
})
