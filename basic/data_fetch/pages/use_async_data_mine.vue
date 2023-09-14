<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
    <hr />
    <button @click='refresh'>다시 불러오기</button>
  </div>
</template>

<script setup>
const { data, pending } = await useAsyncData('myData', () => $fetch('/api/my_data'),
  {
    transform: (_data) => _data.results[0],
    server: true,
  })

const refresh = () => refreshNuxtData("myData")
</script>
