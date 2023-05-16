<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <p>${{ price }}</p>
    <button @click="emit('add', id)">
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<Product>()
const emit = defineEmits<{
  add: [id: number],
}>()
</script>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

.card {
  background: rgba(0,0,0,0.25);
  border-radius: 0.5rem;
  padding: 1rem;
}
</style>