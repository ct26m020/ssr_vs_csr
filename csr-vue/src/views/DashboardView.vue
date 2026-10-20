<script setup>
// ✅ CSR passt: privates, hoch-interaktives Dashboard (würde hinter einem Login liegen).
// - Kein SEO-Bedarf → leeres initiales HTML ist egal.
// - Der Server liefert nur statische Dateien + kleine JSON-Antworten, rendern tut der Browser.
// - Die Werte werden alle 2 s im Browser aktualisiert.
import { ref, onMounted, onUnmounted } from 'vue'

const stats = ref(null)

async function refresh() {
  stats.value = await (await fetch('/api/dashboard')).json()
}

let timer
onMounted(() => {
  refresh()
  timer = setInterval(refresh, 2000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <main class="page">
    <header class="top">
      <div>
        <h1>Shop-Dashboard</h1>
        <span class="badge">CSR</span>
      </div>
    </header>
    <div v-if="stats" class="tiles">
      <div class="card"><p>Besucher online</p><strong>{{ stats.visitorsOnline }}</strong></div>
      <div class="card"><p>Bestellungen heute</p><strong>{{ stats.ordersToday }}</strong></div>
      <div class="card"><p>Umsatz heute</p><strong>{{ stats.revenueToday }} €</strong></div>
    </div>
    <p v-else class="lead">⏳ Lade Kennzahlen…</p>
  </main>
</template>
