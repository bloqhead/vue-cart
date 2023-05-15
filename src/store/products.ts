import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([
    {
      id: 12,
      name: 'Kitty Bed',
      description: 'Lorem ipsum dolor sit amet.',
      price: 25,
    },
    {
      id: 34,
      name: 'Bearded Dragon Sweater',
      description: 'Lorem ipsum dolor sit amet.',
      price: 12.50,
    },
    {
      id: 76,
      name: 'Snake Hat',
      description: 'Lorem ipsum dolor sit amet.',
      price: 5.75,
    },
  ])

  return { products }
})