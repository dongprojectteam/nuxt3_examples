<template>
  <div>
    <div v-if='loading'>로딩중입니다.</div>
    <div v-else>
      <h1>{{ `${data.name.title} ${data.name.first} ${data.name.last}` }}</h1>
      <p>{{ data.dob.age }}세 {{ data.gender === 'female' ? '여성' : '남성' }}</p>
    </div>

    <Navigator></Navigator>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps(['pending', 'data'])
const loading = computed(() => props.pending)

</script>