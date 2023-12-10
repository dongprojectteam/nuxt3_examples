export default defineNuxtRouteMiddleware((to, from) => {
  const userData = useUserData()
  if (!userData.value) return navigateTo('/auth/login')
})