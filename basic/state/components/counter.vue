<template>
  <div>
    <button @click='count++'>1 더하기</button>
    <button @click='count--'>1 빼기</button>
  </div>
</template>

<script setup lang='ts'>
const count: Ref<number> = useState<number>('count')
</script>