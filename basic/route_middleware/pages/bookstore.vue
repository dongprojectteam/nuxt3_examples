<template>
  <h1>Bookstore</h1>
</template>

<script setup lang='ts'>
definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(
      (to) => {
        throw createError({ statusCode: 501, message: '공사중입니다!' })
      }
    )
  ]
})

</script>