<template>
  <div>
    <h1>Home</h1>
    <NuxtLink to='/bookstore'>Book Store</NuxtLink> |
    <a href='#' @click='onCart'>Cart</a> |
    <a href='#' @click='onProfile'>Profile</a>
  </div>
</template>

<script setup lang='ts'>
const onCart = async () => await navigateTo({
  path: '/cart',
  query: {
    item: 1
  }
}, {
  replace: false,
  external: true,
  open: {
    target: '_blank',
    windowFeatures: {
      width: 600,
      height: 400
    }
  }
})

const onProfile = async () => {
  const ret = await navigateTo('/profile')
  console.log(ret)
}

</script>