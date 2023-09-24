<script setup lang="ts">
import { ref } from 'vue' // 코드 1: 반응형 API ref 불러오기

/* 코드 2: counter라는 반응형 변수를 만들고 0값으로 초기화 */
const counter = ref(0)
</script>

<template>
  <!-- 코드 3: @click 이벤트를 통해 counter 값 증가 -->
  <!--        이중 중괄호를 통해 counter 값 렌더링 -->
  <button @click='counter++'>{{ counter }}</button>
</template>