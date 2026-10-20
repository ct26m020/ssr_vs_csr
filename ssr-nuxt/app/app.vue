<template>
  <NuxtRouteAnnouncer />
  <nav class="nav">
    <NuxtLink to="/">Produkte (✅ SSR passt)</NuxtLink>
    <NuxtLink to="/dashboard">Dashboard (❌ Anti-Pattern)</NuxtLink>
  </nav>
  <NuxtPage />
</template>
