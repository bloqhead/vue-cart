<template>
  <div class="cart-list">
    <ul v-if="products && products.length > 0">
      <li v-for="(product, key) in products" :key="key">
        <header class="flex">
          <div>
            <button @click="removeFromCart(product)">
              &times;
            </button>
          </div>
          <div>
            <h4>{{ product.name }}</h4>
          </div>
        </header>
        <div class="flex">
          <div>
            <label :for="`quantity-${key}`">
              Quantity:
            </label>
          </div>
          <div>
            <input
              v-model="product.quantity"
              type="number"
              :name="`quantity-${key}`"
              :id="`quantity-${key}`"
            >
          </div>
        </div>
        <div class="sub-total">
          <p>{{ calculateTotal(product.price, product.quantity) }}</p>
        </div>
      </li>
    </ul>
    <div v-else class="notice">
      <p>Add some products to your cart!</p>
    </div>
    <div v-if="total" class="total">
      <p><strong>Total:</strong> {{ total }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart'
import type { Purchase } from '../types'

const cartStore = useCartStore()

const props = defineProps<{
  products: Purchase[],
  total: String,
}>()

const removeFromCart = (ev: number) => {
  cartStore.removeCartItem(ev)
}

const calculateTotal = (price: number, quantity: number): number => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  if (typeof price === 'number' && typeof quantity === 'number') {
    return formatter.format(price * quantity)
  }

  return formatter.format(0)
}
</script>

<style scoped>
.cart-list {

}

.flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

h4, p {
  margin: 0;
  padding: 0;
}

input {
  display: block;
}

.total {
  padding: 1rem 0;
}

.notice {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>