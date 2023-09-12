<template>
  <NuxtLayout name='category'>
    <template #it>
      <div>- IT Books</div>
    </template>
    <template #animation>
      <div>- Animation Books</div>
    </template>
    <div>- Other Books</div>
  </NuxtLayout>
</template>

<script setup lang='ts'>
definePageMeta({
  layout: false,
})
</script>