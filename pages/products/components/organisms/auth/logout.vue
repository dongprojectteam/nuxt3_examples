<script lang='ts' setup>
useAuth().logout()
</script>

<template>
  <div class='w-100 h-100 flex-center'>
    <div class='t-center'>
      <h1>안전하게 로그아웃 되었습니다.</h1>
      <NuxtLink to='/'>DMART로 돌아가기</NuxtLink>
    </div>
  </div>
</template>

