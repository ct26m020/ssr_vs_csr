import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// Die API (/api/products, /api/dashboard) liefert das Nuxt-Projekt auf Port 3000.
// Der Proxy leitet /api dorthin weiter – das CSR-Frontend selbst ist nur statisches HTML + JS.
const api = { '/api': 'http://localhost:3000' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { proxy: api },
  preview: { proxy: api },
})
