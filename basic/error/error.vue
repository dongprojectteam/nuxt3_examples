<template>
  <div v-if='error'>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <hr />
    <div v-html='error.stack'></div>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps({ error: Object })

console.log(props.error)
// 또는 props 없이 다음과 같이 사용 가능합니다.
// const error = useError()
</script>
