<script setup lang='ts'>
const authType = useRoute().params.auth_type as string

definePageMeta({
  layout: false
})
</script>

<template>
  <AuthLogout v-if='authType == "logout"'></AuthLogout>
  <AuthLogin v-else :signup='authType == "signup"'></AuthLogin>
</template>
