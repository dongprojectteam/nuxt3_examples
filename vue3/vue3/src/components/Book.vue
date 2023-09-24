<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps({
  book: String
})

const bookName = ref(props.book)
</script>

<template>
  <!-- 코드 1: 컴포넌트가 출력하는 값과, 컴포넌트가 받은 값 -->
  <span>{{ bookName }} / {{ props.book }}</span>
</template>