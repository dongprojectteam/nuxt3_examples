<template>
  <div>
    <h1>Home</h1>
    <NuxtLink to='/bookstore'>Book Store</NuxtLink> |
    <a href='#' @click='onCart'>Cart</a>
  </div>
</template>

<script setup lang='ts'>
const onCart = () => navigateTo(
  {
    path: '/cart',
    query: {
      item: 1
    }
  },
  {
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


</script>