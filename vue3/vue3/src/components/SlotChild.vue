<script setup lang='ts'></script>

<template>
  <header>
    <!-- 코드 1: header라는 이름을 가진 Slot 입니다. -->
    <slot name='header'></slot>
  </header>
  <main>
    <!-- 코드 2: 디폴트 Slot입니다. -->
    <slot></slot>
  </main>
  <footer>
    <slot name='footer'>s</slot>
  </footer>
</template>

<style scoped>
header {
  font-size: 2rem;
  font-weight: 500;
}

footer {
  color: grey;
  font-size: 0.8rem;
  font-style: italic;
}
</style>