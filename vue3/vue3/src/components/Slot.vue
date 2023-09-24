<script setup lang='ts'>
import SlotChild from './SlotChild.vue'

</script>

<template>
  <SlotChild>
    <!-- 코드 1: v-slot이 사용되지 않았으므로 디폴트 슬롯에 할당됩니다. -->
    기본 컨텍스트는 default Slot에 들어갑니다.
    <!-- 코드 2: header 슬롯에 할당됩니다. -->
    <template v-slot:header>Header용 컨텍스트</template>
    <!-- 코드 3: footer 슬롯에 할당됩니다. -->
    <template v-slot:footer>Footer용 컨텍스트</template>
  </SlotChild>
</template>