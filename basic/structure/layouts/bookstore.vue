<template>
  <header class='header'>
    <NuxtLink to='/category'>카테고리로 이동</NuxtLink> | <NuxtLink to='/'>메인 페이지로 이동</NuxtLink>
  </header>
  <slot></slot>
</template>

<style scoped>
.header {
  color: rgb(16, 139, 98);
}
</style>