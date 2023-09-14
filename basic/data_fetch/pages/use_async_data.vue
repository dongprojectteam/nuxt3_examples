<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
  </div>
</template>

<script setup>
const { data, pending } = await useAsyncData('userData', () => $fetch('https://randomuser.me/api/'),
  {
    transform: (_data) => _data.results[0],
    pick: ['name', 'dob']
  })
</script>
