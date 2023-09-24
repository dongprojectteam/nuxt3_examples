<script setup lang='ts'>
// 코드 1: defineProps를 통해 
const props = defineProps({
  stringProps: {
    type: String,
    default: 'default value',
    required: true
  },
  numberProps: Number,
  objectProps: Object,
  booleanProps: Boolean,
  listProps: Array,
})

const emit = defineEmits(['child-event'])
</script>

<template>
  <div v-for='(prop, index) in props' :key='index'>
    {{ prop }}
  </div>

  <!-- 코드 2: emit 함수를 통해 child-event 이벤트 발생 -->
  <button @click='emit("child-event", "Event Triggered")'>Event 발생</button>
</template>