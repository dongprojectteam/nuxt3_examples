<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
    <button @click='id++'>ID 증가</button>
  </div>
</template>

<script setup>
const id = ref(0)
const { data, pending } = await useFetch('https://randomuser.me/api/',
  {
    transform: (_data) => _data.results[0],
    watch: [id]
  })

</script>
