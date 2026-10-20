<script setup lang="ts">
// ❌ Anti-Pattern: SSR für ein privates, hoch-interaktives Dashboard (würde hinter einem Login liegen).
// - Jeder Seitenaufruf lässt den Server die Seite rendern → unnötige Serverlast.
// - Kein SEO-Nutzen: Crawler kommen hinter den Login ohnehin nicht.
// - Die Werte werden sowieso alle 2 s im Browser aktualisiert → das Server-HTML ist sofort veraltet.
// Lösung: in nuxt.config.ts  routeRules: { '/dashboard': { ssr: false } }  oder gleich als CSR-App (siehe csr-vue).
const { data: stats, refresh } = await useFetch('/api/dashboard')

let timer: ReturnType<typeof setInterval>
onMounted(() => { timer = setInterval(refresh, 2000) })
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <main class="page">
    <header class="top">
      <div>
        <h1>Shop-Dashboard</h1>
        <span class="badge bad">SSR – Anti-Pattern</span>
      </div>
    </header>
    <div v-if="stats" class="tiles">
      <div class="card"><p>Besucher online</p><strong>{{ stats.visitorsOnline }}</strong></div>
      <div class="card"><p>Bestellungen heute</p><strong>{{ stats.ordersToday }}</strong></div>
      <div class="card"><p>Umsatz heute</p><strong>{{ stats.revenueToday }} €</strong></div>
    </div>
  </main>
</template>
