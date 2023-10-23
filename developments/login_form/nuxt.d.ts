declare global {
  interface UserName {
    firstname: string
    lastname: string
  }

  interface UserInformation {
    id: number
    email: string
    username: string
    password: string
    name: UserName
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
    username: string
    password: string
    address: Address
    phone: string
  }
}
