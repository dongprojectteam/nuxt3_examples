<template>
  <div>
    <h1>Home</h1>
    <button>
      <NuxtLink to='/bookstore' replace>Book Store (Internal)</NuxtLink>
    </button>
    <button>
      <NuxtLink to='http://nuxt.com'>Nuxt (External)</NuxtLink>
    </button>
    <button>
      <NuxtLink to='http://nuxt.com' custom>Nuxt (Custom)</NuxtLink>
    </button>
    <button @click='onCart'>Cart</button>
    <button @click='onProfile'>Profile</button>
    <button @click='onNuxt'>Nuxt (Programatic)</button>
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
      popup: true,
      width: 600,
      height: 400,
      left: 200,
      top: 200
    }
  }
})

const onProfile = async () => await navigateTo('/profile')

const onNuxt = async () => await navigateTo('http://nuxt.com',
  { external: true })
</script>

