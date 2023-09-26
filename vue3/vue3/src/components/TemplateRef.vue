<script setup lang='ts'>
import { ref, onMounted, type Ref } from 'vue'

// 코드 1: 템플릿 엘리먼트에 접근할 변수 생성
//         setup(creat) 단계에서 DOM이 없어 초기값은 무시
const divRef: Ref = ref('div_referene')
const h1Ref: Ref = ref(null)
const pRef: Ref = ref()

onMounted(() => {
  // 코드 2: <div> 엘리먼트에 스타일 적용
  divRef.value.style.border = '1px solid black'

  // 코드 3: <h1> 엘리먼트에 스타일 적용
  h1Ref.value.style.color = 'blue'

  // 코드 4: <p> 엘리먼트의 textContent 속성에 값 적용
  pRef.value.textContent = 'P 엘리먼트입니다.'
})
</script>

<template>
  <!-- 코드 5: ref 속성으로 변수 연동 -->
  <div ref='divRef'>
    <h1 ref='h1Ref'>H1 엘리먼트입니다.</h1>
    <p ref='pRef'></p>
  </div>
</template>
