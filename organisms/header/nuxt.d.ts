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

type CartItem = {
  id: number
  count: number
}

interface UserName {
  firstname: string
  lastname: string
}

interface Address {
  city: string
  street: string
  number: number
  zipcode: string
  geolocation: {
    lat: string
    long: string
  }
}

interface User {
  id: number
  email: string
  username: UseName
  password: string
  address: Address
  phone: string
  iat?: Date
}

type UserData = Omit<User, 'password'>

type AuthResult = {
  success: boolean
  jwt: string
}