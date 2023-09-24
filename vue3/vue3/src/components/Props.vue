<script setup lang='ts'>
import { ref } from 'vue'

// 코드 1: 태그명은 import 시 결정
import ChildComponentTag from './Child.vue'

const eventValue = ref('')

// 코드 2: 이벤트를 받는 함수 정의
const onEvent = (value: string) => {
  eventValue.value = value
}
</script>

<template>
  <p v-show='eventValue'>이벤트 값 : {{ eventValue }}</p>

  <!-- 코드 3: 문자열을 제외하면 v-bind를 이용해 Props 전달 -->
  <ChildComponentTag stringProps='stringProps' :numberProps=1 :objectProps='{ key: "value" }' :booleanProps=true
    :listProps='[1, 2, 3, 4]' v-on:child-event='(onEvent)'></ChildComponentTag>
</template>
