<template>
  <div>
    <h1>{{ count }}</h1>
    <Counter></Counter>
  </div>
</template>

<script setup lang="ts">
  const count = useState<number>('count', () => 100)
</script>
