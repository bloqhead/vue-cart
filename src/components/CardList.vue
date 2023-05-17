<template>
  <div class="card-list">
    <card
      v-for="(product, key) in props.products"
      :key="key"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :quantity="getQuantity(product)"
      @add="addToCart(product)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'
import { useCartStore } from '../store/cart'
import Card from './Card.vue'

const cartStore = useCartStore()

const props = defineProps<{
  products: Product[]
}>()

const addToCart = (ev: Product) => {
  cartStore.addCartItem(ev)
}

const getQuantity = (product: Product) => {
  return cartStore.getQuantity(product)
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