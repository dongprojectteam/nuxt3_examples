<script setup lang="ts">
import { ref } from 'vue'

import Computed from './components/Computed.vue'
import Conditional from './components/Conditional.vue'
import Declarative from './components/Declarative.vue'
import For from './components/For.vue'
import Form from './components/Form.vue'
import PropsTAG from './components/Props.vue'
import Slot from './components/Slot.vue'
import Watcher from './components/Watcher.vue'

const menu = ref('props')
</script>

<template>
  <div>
    <header>
      <ul>
        <li @click='menu = "props"'><a href='#'>Tag, Props 그리고 Emits</a></li>
        <li @click='menu = "declarative"'><a href='#'>선언적 렌더링</a></li>
        <li @click='menu = "form"'><a href='#'>폼 인풋 바인딩</a></li>
        <li @click='menu = "conditional"'><a href='#'>조건부 렌더링</a></li>
        <li @click='menu = "for"'><a href='#'>반복문</a></li>
        <li @click='menu = "computed"'><a href='#'>계산된 속성</a></li>
        <li @click='menu = "watcher"'><a href='#'>Watcher</a></li>
        <li @click='menu = "slots"'><a href='#'>Slots</a></li>
        <li @click='menu = "lifecycle"'><a href='#'>라이프사이클</a></li>
      </ul>
    </header>

    <div>
      <Computed v-if='menu == "computed"'></Computed>
      <Conditional v-if='menu == "conditional"'></Conditional>
      <Declarative v-if='menu == "declarative"'></Declarative>
      <For v-if='menu == "for"'></For>
      <Form v-if='menu == "form"'></Form>
      <PropsTAG v-if='menu == "props"'></PropsTAG>
      <Slot v-if='menu == "slots"'></Slot>
      <Watcher v-if='menu == "watcher"'></Watcher>
    </div>
  </div>
</template>

<style scoped>
header ul {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: darkslategray;
}

li {
  float: left;
  padding: 2rem;
  list-style-type: none;
}

a {
  color: white;
}
</style>

