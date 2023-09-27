<script setup lang='ts'>
import { reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onErrorCaptured } from 'vue'
import Error from './Error.vue'

const messages: string[] = reactive([])

// 코드 1: 다양한 훅에 콜백함수 구현
onBeforeMount(() => { messages.push('onBeforeMount') })
onMounted(() => { messages.push('onMounted') })
onBeforeUpdate(() => { messages.push('onBeforeUpdate') })

// 코드 2: 이 부분은 무한 업데이트에 빠집니다.
// onUpdated(() => { messages.push('onUpdated') })
onErrorCaptured(() => { messages.push('onErrorCaptured') })
</script>

<template>
  <div>
    <Error></Error>
    <p v-for='(message, index) in messages' :key='index'>
      {{ message }}
    </p>
  </div>
</template>
