interface Token {
  token: string
}

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

export const useAuth = () => {
  const config = useRuntimeConfig()
  const user = useState<User | {}>('user', () => ({}))

  const _getSingleUser = async (userid: number) => {
    const { data: user, error } = await useFetch(`users/${userid}`, {
      baseURL: config.public.apiBaseUrl,
    })

    if (error.value) throw new Error(error.value.message)
  }

  const login = async (username: string, password: string) => {
    let result = true
    try {
      user.value = {}
      const response = await $fetch<Token | string>(
        'https://fakestoreapi.com/auth/login',
        {
          method: 'POST',
          body: {
            username: username,
            password: password,
          },
        }
      )
      const error = typeof response === 'string' || response.token == null

      /* 가상 API는 사용자 id를 보내주지 않으므로, 1번 유저를 사용자라고 가정합니다 */
      if (!error) await _getSingleUser(1)
    } catch (e) {
      result = false
    }

    return result

    /* 사용가능한 예제 아이디 / 비밀번호 
      ID: johnd
      PW: m38rmF$
  
      응답: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXIiOiJqb2huZCIsImlhdCI6MTY5NDkxNjI0Nn0.dhEZT4v5Lapm2d8zTZBFf5Cjlr8u5lgQ3MaHug2jCFI"
    }
    */
  }

  return {
    login,
  }
}
