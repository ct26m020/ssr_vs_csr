<script setup>
// CSR: Daten werden erst im Browser geholt, das initiale HTML ist leer.
// ❌ Anti-Pattern für eine öffentliche, SEO-relevante Shop-Seite:
//    Crawler und Link-Vorschauen sehen nur <div id="app"></div> (→ View Source).
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const products = ref(null)
const cart = ref(0)

onMounted(async () => {
  products.value = await (await fetch('/api/products')).json()
})
</script>

<template>
  <main class="page">
    <header class="top">
      <div>
        <h1>Vue-Shop</h1>
        <span class="badge bad">CSR</span>
      </div>
      <span class="cart">🛒 {{ cart }}</span>
    </header>
    <ul v-if="products" class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @add="cart++" />
    </ul>
    <p v-else class="lead">⏳ Lade Produkte…</p>
    <button type="button" class="checkout">Zur Kasse ({{ cart }})</button>
  </main>
</template>
