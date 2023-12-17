<script setup lang='ts'>
import NAV_LOGGED_OUT from '~/assets/nav/logged-out.json'
import NAV_LOGGED_IN from '~/assets/nav/logged-in.json'
import NAV_CART from '~/assets/nav/cart.json'

const { loggedin } = useAuth()

const cartItemCount = useCart().cartItemCount
const navItems = computed<NavItem[]>(() => {
  NAV_CART[0].count = cartItemCount.value
  if (loggedin.value) return NAV_LOGGED_IN.concat(NAV_CART)
  return NAV_LOGGED_OUT.concat(NAV_CART)
})

const onClick = (item: NavItem) =>
  item.newWindow ? newWindow(item.to) : navigateTo(item.to)

const searchValue = ref('')
const onSearch = () => {
  const searchValueAsString = searchValue.value
  searchValue.value = ''

  navigateTo({
    path: '/search',
    query: {
      search: searchValueAsString,
    },
  })
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('message', (event: MessageEvent) => {
      const data: string = event.data
      if (data.length)        
        location.reload()
    })
  }
})
</script>

<template>
  <div>
    <div class='flex'>
      <CompanyLogo></CompanyLogo>
      <Navigator class='ml-auto' :nav-items='navItems' @click='onClick'>
      </Navigator>
    </div>

    <div class='bg-default p-1'>
      <NuxtLayout name='content'>
        <div class='flex-vcenter'>
          <span class='m-0'>
            <NuxtLink to='/'><img src='~/assets/images/logo.png'
                style='height: 50px'>
            </NuxtLink>
          </span>
          <Input type='search' label='search' v-model='searchValue'
            class='sm ml-2' v-on:keyup.enter='onSearch'></Input>
        </div>
      </NuxtLayout>
    </div>
  </div>
</template>
