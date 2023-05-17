<template>
  <div class="card">
    <h3>{{ name }} <span v-if="quantity">({{ quantity }})</span></h3>
    <p>{{ description }}</p>
    <p>${{ price }}</p>
    <button @click="emit('add', id)">
      Add to cart
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'

const props = defineProps<Product & { quantity?: number }>()

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