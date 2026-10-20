<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Produkte (❌ Anti-Pattern)</RouterLink>
    <RouterLink to="/dashboard">Dashboard (✅ CSR passt)</RouterLink>
  </nav>
  <RouterView />
</template>
