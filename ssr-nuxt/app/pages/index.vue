<script setup lang="ts">
// ✅ SSR: Daten werden VOR dem Response auf dem Server geholt,
// der Browser bekommt sofort fertiges HTML (inkl. Titel + Description für Suchmaschinen).
// Beim Hydrieren lädt der Browser die Daten NICHT nochmal – Nuxt bettet sie ins HTML ein.
const { data: products } = await useFetch('/api/products', { default: () => [] })
const cart = ref(0)

useSeoMeta({
  title: 'Vue-Shop – Produkte (SSR)',
  description: () => `${products.value.map((p) => p.name).join(', ')} im Vue-Shop.`
})
</script>

<template>
  <main class="page">
    <header class="top">
      <div>
        <h1>Vue-Shop</h1>
        <span class="badge">SSR</span>
      </div>
      <span class="cart">🛒 {{ cart }}</span>
    </header>
    <ul class="grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" @add="cart++" />
    </ul>
    <!-- ✅ Kein Layout Shift: Produkte sind schon im HTML, der Button steht von Anfang an richtig -->
    <button type="button" class="checkout">Zur Kasse ({{ cart }})</button>
  </main>
</template>
