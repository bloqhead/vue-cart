<template>
  <div class="card-list">
    <card
      v-for="(product, key) in props.products"
      :key="key"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      @add="addToCart(product)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'
import { useCartStore } from '../store/cart'
import Card from './Card.vue'

const productsStore = useCartStore()

const props = defineProps<{
  products: Product[]
}>()

const addToCart = (ev: Product) => {
  productsStore.addCartItem(ev)
  console.log(ev)
}
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
</style>