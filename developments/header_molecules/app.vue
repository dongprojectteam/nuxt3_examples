<script lang='ts' setup>
import NAV_LOGGED_OUT from '~/assets/nav/logged-out.json'
import NAV_LOGGED_IN from '~/assets/nav/logged-in.json'
import NAV_CART from '~/assets/nav/cart.json'

// 아래 loggedin 값을 false로 변경해보세요
const loggedin = ref(true)
const navItems = computed<NavItem[]>(() => {
  if (loggedin.value) return NAV_LOGGED_IN.concat(NAV_CART)
  return NAV_LOGGED_OUT.concat(NAV_CART)
})

const onClick = (item: NavItem) => console.log(item)
</script>

<template>
  <div class='m-4'>
    <CompanyLogo></CompanyLogo>
    <Navigator :nav-items='navItems' @click='onClick'></Navigator>
  </div>
</template>
