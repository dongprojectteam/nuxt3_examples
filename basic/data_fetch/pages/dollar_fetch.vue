<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
  </div>
</template>

<script setup>
const data = ref()
const pending = ref(true)
const response = await $fetch('https://randomuser.me/api/', {
  async onRequest({ request, options }) {
    console.log(request)
    pending.value = true
  },
  async onResponse({ request, options, response }) {
    console.log(response.body)
    pending.value = false
  }
})
data.value = response.results[0]
</script>
