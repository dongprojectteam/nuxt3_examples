<template>
  <div class='container h-100'>
    <form class='form-group' @submit.prevent='onLogin'>
      <div v-if='message' class='mb-3 t-red t-center w-100'>{{ message }}</div>
      <div v-if='id.length == 0' class='t-red t-sm ps-2 m-1'>⚠️ 아이디를 적어주세요</div>
      <Input id="user_id" class='lg m-1' label='아이디' v-model:value='id' :disabled='pending'></Input>
      <div v-if='password.length == 0' class='t-red t-sm ps-2 m-1'>⚠️ 비밀번호를 적어주세요</div>
      <Input id="user_password" class='lg m-1' label='비밀번호' type='password' v-model:value='password'
        :disabled='pending'></Input>

      <button type='submit' class='m-1 lg'>Login</button>
    </form>
  </div>
</template>

<script setup lang='ts'>
const id = ref('')
const password = ref('')
const message = ref('')
const pending = ref(false)

const onLogin = async () => {
  pending.value = true
  const success = await useAuth().login(id.value, password.value)
  pending.value = false
  password.value = ''

  if (success)
    message.value = ''
  else
    message.value = '로그인에 실패했습니다.'

  const user = useState<User | {}>('user')
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-group {
  display: flex;
  flex-flow: column;
}
</style>
