import { defineConfig } from 'vite'
import { removeConsolePlugin } from './scripts/remove-console-plugin.js'

const securityHeaders = {
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
}

export default defineConfig(({ mode }) => ({
  server: { headers: securityHeaders },
  preview: { headers: securityHeaders },

  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: {
        chrome: 100,
        firefox: 100,
        safari: 16,
        edge: 100,
      },
      cssModules: false,
      drafts: {
        customMediaQueries: true,
      },
    },
  },

  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    sourcemap: mode === 'development',
    reportCompressedSize: false,

    rollupOptions: {
      output: {
        entryFileNames: '[name].built.js',
        chunkFileNames: '[name].built.js',
        assetFileNames: '[name].[ext]',
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },

    chunkSizeWarningLimit: 60,
    assetsInlineLimit: 4096,
  },

  optimizeDeps: {
    include: ['lit'],
    exclude: ['lucide'],
  },

  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },

  plugins: mode === 'production' ? [removeConsolePlugin()] : [],
}))
