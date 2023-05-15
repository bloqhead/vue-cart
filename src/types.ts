export interface Product {
  id: number
  name: string
  description: string
  price: number
}

export interface Purchase extends Product {
  quantity: number
}