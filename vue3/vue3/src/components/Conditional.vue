<script setup lang='ts'>
import { ref } from 'vue'

const vshow = ref(false)
const vif = ref('vif')

</script>

<template>
  <!-- 코드 1: v-show는 On/Off 만 가능 -->
  <div v-show='vshow'>v-show</div>

  <!-- 코드 2: v-if는 다양한 조건 설정 가능 -->
  <div v-if='vif == "vif"'>v-if</div>
  <div v-else-if='vif == "velseif"'>v-else-if</div>
  <div v-else>v-else</div>

  <div>
    <button @click='vshow = !vshow'>v-show</button>
    <button @click='vif = "vif"'>v-if</button>
    <button @click='vif = "velseif"'>v-else-if</button>
    <button @click='vif = "velse"'>v-else</button>
  </div>
</template>