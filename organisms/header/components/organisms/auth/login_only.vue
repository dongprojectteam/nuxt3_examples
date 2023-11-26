<script setup lang='ts'>
const saved_id = useId().value ? useId().value : ''

const credential = reactive({
  id: saved_id,
  password: ''
})

const title = ref('입장하기')

const pending = ref(false)
const message = ref('')
const useWarning = ref(false)

const _prepareAction = () => {
  pending.value = true
  useWarning.value = true
  message.value = ''
}

const remember = ref(credential.id.trim().length > 0)
const _remember = () => {
  if (remember.value && credential.id.trim().length > 0)
    useId(credential.id.trim(), { maxAge: 1000 * 60 * 60 * 24 * 365 })
}

const onAction = async () => {
  _prepareAction()
  _remember()

  if ((_check())) {
    const action = useAuth().login

    await action(credential.id, credential.password).then((result: boolean | string) => {
      window.opener.postMessage(result, '*')
      window.close()
    }).catch(() => {
      message.value = `${title.value}에 실패했습니다.`
    }).finally(() => {
      pending.value = false
      credential.password = ''
    })
  } else {
    pending.value = false
    message.value = `${title.value}에 실패했습니다.`
  }
}

const empty = (value: string) => useWarning.value && !value.length

const _check = () => {
  credential.id = credential.id.trim()
  credential.password = credential.password.trim()
  return credential.id.length && credential.password.length
}
</script>

<template>
  <div v-if='pending' class='w-100 h-100 flex-center'>
    <Loader />
  </div>
  <div v-else class='flex-center h-100'>
    <form class='flex-column' @submit.prevent='onAction'>
      <h1>{{ title }}</h1>
      <div v-if='message' class='mb-3 t-danger t-center w-100'>{{ message }}</div>
      <div v-if='empty(credential.id)' class='t-danger t-sm pl-2 m-1'>
        ⚠️ 아이디를 적어주세요
      </div>
      <Input id="user_id" class='lg m-1' label='아이디'
        v-model='credential.id'></Input>
      <div v-if='empty(credential.password)' class='t-danger t-sm pl-2 m-1'>⚠️
        비밀번호를 적어주세요</div>
      <Input id="user_password" class='lg m-1' label='비밀번호' type='password'
        v-model='credential.password'></Input>

      <div class='mb-4 flex'>
        <div>
          <Checkbox id='remember' class='checkbox' v-model='remember'>
            아이디 기억하기
          </Checkbox>
        </div>
        <div class='ml-auto'>
          <NuxtLink class='t-sm' to='/auth/signup'>신규가입하기</NuxtLink>
        </div>
      </div>

      <button type='submit' class='m-1 lg' :disabled='pending'>
        입장하기
      </button>
    </form>
  </div>
</template>

<style scoped>
.checkbox {
  zoom: 0.9;
}
</style>
