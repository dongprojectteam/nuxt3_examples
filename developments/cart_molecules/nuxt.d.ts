type NavItem = {
  label: string
  to: string
  count?: number
  newWindow?: boolean
}

type Category = {
  label: string
  active: boolean
}

type Product = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating?: {
    rate: number
    count: number
  }
  selected?: boolean
  count?: number
}
