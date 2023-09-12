<template></template>

<script setup lang='ts'>
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    throw createError({
      statusCode: Number(to.params.error),
      message: `${to.params.error} 에러가 발생했습니다.`
    })
  })
})
</script>