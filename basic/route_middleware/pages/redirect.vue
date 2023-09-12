<template>
  <h1>Redirect To Cart</h1>
</template>

<script setup lang='ts'>
definePageMeta({
  middleware:
    (to, from) => {
      return navigateTo('/cart')
    }
})
</script>