<template>
  <h1>Cart</h1>
</template>

<script setup lang='ts'>
definePageMeta({
  middleware: [
    'a',
    (to, from) => {
      console.log('cart middleware index 1')
    },
    (to, from) => {
      console.log('cart middleware index 2')
    }
  ]
})
</script>