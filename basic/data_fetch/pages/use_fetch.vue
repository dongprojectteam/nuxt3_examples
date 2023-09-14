<template>
  <div>
    <UserInformation :pending='pending' :data='data'></UserInformation>
  </div>
</template>

<script setup>
const { data, pending } = await useFetch('https://randomuser.me/api/',
  {
    transform: (_data) => _data.results[0]
  })


// const onDataFetch = async () => {
//   ({ data: { value: result.value }, pending: { value: waiting.value } } = await useFetch('https://randomuser.me/api/',
//     {
//       transform: (_data) => _data.results[0]
//     }))
// }

// const onAsyncData = async () =>
// ({ data: { value: result.value }, pending: { value: waiting.value } }
//   = await useAsyncData('userData', () => $fetch('https://randomuser.me/api/'),
//     {
//       transform: (_data) => _data.results[0]
//     }))

// const onMyDataFetch = async () =>
// ({ data: { value: result.value }, pending: { value: waiting.value } } = await useFetch('/api/my_data',
//   {
//     transform: (_data) => _data.results[0]
//   }))

// const onAsyncMyData = async () =>
// ({ data: { value: result.value }, pending: { value: waiting.value } }
//   = await useAsyncData('userData', () => $fetch('/api/my_data'),
//     {
//       transform: (_data) => _data.results[0]
//     }))

// const onLazyAsyncMyData = async () =>
// ({ data: { value: result.value }, pending: { value: waiting.value } }
//   = await useLazyAsyncData('userData', () => $fetch('/api/my_data'),
//     {
//       transform: (_data) => _data.results[0]
//     }))

// onMounted(() => onAsyncData())
</script>
