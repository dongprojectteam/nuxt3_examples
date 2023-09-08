<template>
  <div>
    <p>책 종류 : {{ $route.params.category }}</p>
    <p>책 식별 번호 : {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

if (isNaN(route.params.id))
  console.warn('id는 숫자만 사용 가능합니다')

</script>