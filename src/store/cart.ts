import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Purchase } from '../types'

export const useCartStore = defineStore('cart', () => {
  const cartItems = reactive<Purchase[]>([])

  const cartTotal = computed(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    
    const total = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0)

    return formatter.format(total)
  })

  const addCartItem = (product: Purchase) => {
    const index = computed(() => {
      return cartItems.findIndex((i) => i.id === product.id)
    })

    if (index.value !== -1) {
      cartItems[index.value].quantity += 1
    } else {
      cartItems.push({
        ...product,
        quantity: 1,
        price: product.price,
      })
    }
  }

  const removeCartItem = (product: Purchase) => {
    const index = computed(() => {
      return cartItems.findIndex((i) => i.id === product.id)
    })

    if (index.value >= 0) {
      cartItems.splice(index.value, 1)
    }
  }

  return { cartItems, cartTotal, addCartItem, removeCartItem }
})