<template>
  <div>원래 표시가 되어야 하는 메시지입니다.</div>
</template>

<script setup lang='ts'>
const errorTriggered = useState<boolean>('errorTriggered', () => false)

onMounted(() => {
  if (!errorTriggered.value) {
    errorTriggered.value = true
    throw createError('Error Happened')
  }
})
</script>
