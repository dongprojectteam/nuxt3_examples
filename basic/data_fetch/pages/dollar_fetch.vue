<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
  </div>
</template>

<script setup>
const { data, pending } = await useAsyncData('userData', () => $fetch('/api/my_data'),
  {
    transform: (_data) => _data.results[0],
    lazy: true
  })
</script>
