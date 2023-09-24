<script setup lang='ts'>
import { ref } from 'vue'

const name = ref('홍길동')
const email = ref('')
const password = ref('')

const onEmail = (event: Event) => {
  email.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div>
  </div>

  <div>
    <label>이름 </label>
    <!-- 코드 1: 값 바인딩, 이벤트 리스닝, 인라인 핸들링 -->
    <input type='text' :value='name' @input='(event: Event) => name = (event.target as HTMLInputElement).value'>
    {{ name }}
  </div>
  <div>
    <label>이메일 </label>
    <!-- 코드 2: 메소드 핸들링 -->
    <input type='email' :value='email' @input='onEmail'>
    {{ email }}
  </div>
  <div>
    <label>비밀번호 </label>
    <!-- 코드 3: v-model 바인딩 -->
    <input type='password' v-model='password'>
    {{ password }}
  </div>
</template>

<style scoped>
label {
  display: inline-block;
  width: 100px;
  text-align: end;
  padding-right: 1rem;
}
</style>