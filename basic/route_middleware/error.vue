<template>
  <h1>{{ error!.message }} </h1>
</template>

<script setup lang='ts'>
const props = defineProps({ error: Object })
</script>