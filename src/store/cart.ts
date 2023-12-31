import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Purchase } from '../types'

export const useCartStore = defineStore('cart', () => {
  const cartItems = reactive<Purchase[]>([])

  const findIndex = (product: Purchase) => {
    return cartItems.findIndex((i) => i.id === product.id)
  }

  const cartTotal = computed(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    
    const total = cartItems.reduce((acc: number, item: Purchase) => {
      return acc + item.price * item.quantity
    }, 0)

    return formatter.format(total)
  })

  const addCartItem = (product: Purchase) => {
    const index = computed(() => {
      return findIndex(product)
    })

    if (index.value !== -1) {
      cartItems[index.value].quantity += 1
    } else {
      cartItems.push({
        ...product,
        quantity: 1,
      })
    }
  }

  const removeCartItem = (product: Purchase) => {
    const index = computed(() => {
      return findIndex(product)
    })

    if (index.value >= 0) {
      cartItems.splice(index.value, 1)
    }
  }

  const getQuantity = (product: Purchase) => {
    const index = computed(() => {
      return findIndex(product)
    })

    if (index.value >= 0) {
      return cartItems[index.value].quantity
    }

    return 0
  }

  return {
    cartItems,
    cartTotal,
    addCartItem,
    removeCartItem,
    getQuantity,
  }
})