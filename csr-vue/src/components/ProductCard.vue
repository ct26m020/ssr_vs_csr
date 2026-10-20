<script setup>
defineProps({ product: { type: Object, required: true } })
defineEmits(['add'])
</script>

<template>
  <li class="card">
    <div class="emoji" aria-hidden="true">{{ product.emoji }}</div>
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <div class="row">
      <strong>{{ product.price.toFixed(2) }} €</strong>
      <button type="button" @click="$emit('add')">In den Warenkorb</button>
    </div>
  </li>
</template>
