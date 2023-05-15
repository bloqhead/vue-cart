<template>
  <div class="store">
    <div class="cards">
      <card-list :products="products" />
    </div>
    <div class="cart">
      <cart
        :products="cartItems"
        :total="total"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProductsStore } from './store/products'
import { useCartStore } from './store/cart'
import CardList from './components/CardList.vue'
import Cart from './components/Cart.vue'

const products = computed(() => useProductsStore().products)
const cartItems = computed(() => useCartStore().cartItems)
const total = computed(() => useCartStore().cartTotal)
</script>

<style scoped>
.store {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.cards {
  flex: 0 0 60%;
}

.cards,
.cart {
  padding: 1rem;
}

.cart {
  flex: 0 0 40%;
}
</style>
