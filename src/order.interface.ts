export interface Order {
  id: string
  number: number
  name: string
  items: Item[]
}

export interface Item {
  id: string
  sku: string
  name: string
  price: number
  quantity: number
}