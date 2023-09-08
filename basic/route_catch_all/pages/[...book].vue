<template>
  <div>
    <p>책 종류 : {{ category }}</p>
    <p>책 식별 번호 : {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const category = route.params.book[0]
const id = route.params.book[1]
</script>