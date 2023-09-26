<script setup lang='ts'>
import { reactive } from 'vue'
const fontColor = reactive({
  color: 'blue'
})

setTimeout(() => {
  fontColor.color = 'red'
}, 3000)
</script>

<template>
  <div id='blue_or_red_or_green'>이 글자는 무슨색일까요?</div>
  <div :id='$style.module'>모듈을 사용했습니다.</div>
  <div :id='$style.module_at_app'>App에서 정의된 스타일 모듈 = 빨강색</div>
  <div id='dynamic_color'>3초 후 파란색에서 빨간색이 됩니다.</div>
</template>

<style scoped>
#blue_or_red_or_green {
  color: green;
}

#dynamic_color {
  color: v-bind(fontColor.color)
}
</style>

<style module>
#module {
  color: blue;
}
</style>