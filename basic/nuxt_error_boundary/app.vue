<template>
  <div>
    <NuxtErrorBoundary @error='errorLogger'>
      <IAmErrorComponent></IAmErrorComponent>
      <template #error='{ error, clearError }'>
        <h1>에러 발생 시 이 메시지가 표시됩니다.</h1>
        <button @click='clearError'>에러 지우기</button>
        <hr />
        {{ error }}
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup lang='ts'>
const errorLogger = (error: unknown) => {
  console.error('아래에 에러가 출력됩니다.')
  console.log(error)
}
</script>
