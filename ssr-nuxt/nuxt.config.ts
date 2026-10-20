// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    head: { htmlAttrs: { lang: 'de' } }
  },
  routeRules: {
    // Lösung für das Anti-Pattern in pages/dashboard.vue: Route nur im Browser rendern (CSR).
    // '/dashboard': { ssr: false }
  }
})
