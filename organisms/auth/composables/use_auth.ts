import { CookieOptions } from 'nuxt/app'

export const useUserData = () => useState<UserData>('_UserInformation')

export const useId = (value: string | undefined = undefined, option: CookieOptions = {}) => { 
  const id = useCookie('_DID', option)
  if(value !== undefined) 
    id.value = value

  return id  
}

export const useAuth = () => {
  const JWT_KEY = '_JWT'

  const config = useRuntimeConfig()
  const jwt = useCookie(JWT_KEY, { default: () => '' }) 

  const loggedin = computed(
    () => typeof jwt.value === 'string' && jwt.value.length > 0
  )

  const login = async (username: string, password: string) => {
    const response = await $fetch<{ token: string }>(
      'https://fakestoreapi.com/auth/login',
      {
        method: 'POST',
        body: {
          username: username,
          password: password,
        },
      }
    )

    // const { payload } = _parseJwt(response.token)
    //const jwt = useCookie(JWT_KEY, { expires: new Date(payload.iat.getTime() + 3600000) })

    /* Fake Store API가 1970년으로 iat를 보내면 다음과 같이 작성합니다. */
    const jwt = useCookie(JWT_KEY, { expires: new Date(Date.now() + 3600000) })
    jwt.value = response.token
    

    return jwt.value
  }

  const signup = async (username: string, password: string) => {
    await $fetch<{ id: number }>('https://fakestoreapi.com/users', {
      method: 'POST',
      body: {
        username: username,
        password: password,
      },
    })

    return true
  }

  const logout = async () => {
    jwt.value = ''
  }

  const getCurrentUser = async () => {
    const userInformation = useUserData()

    if (!userInformation.value) {
      const { payload } = _parseJwt(jwt.value)
      const { data } = await useFetch(`users/${payload.sub}`, {
        baseURL: config.public.apiBase,
      })

      const { password: _, ...rest } = data.value as User
      userInformation.value = rest
    }

    return userInformation
  }

  function _parseJwt(token: string) {
    const header = JSON.parse(atob(token.split('.')[0]))
    const { sub, user, iat } = JSON.parse(atob(token.split('.')[1])) as {
      sub: number
      user: string
      iat: number
    }

    return {
      header,
      payload: { sub, user, iat: new Date(iat) },
    }
  }

  return {
    loggedin,
    login,
    signup,
    logout,
    getCurrentUser,
  }
}
