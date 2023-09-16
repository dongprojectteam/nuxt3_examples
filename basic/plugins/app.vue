<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const { $warn, $info } = useNuxtApp()

$info('인포메이션 로그를 출력합니다.')
$warn('경고 로그를 출력합니다.')
</script>
