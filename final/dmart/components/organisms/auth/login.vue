<script setup lang='ts'>
const props = defineProps({
  signup: {
    type: Boolean,
    default: false
  }
})

const welcome = ref(false)
const saved_id = useId().value ? useId().value : ''

const credential = reactive({
  id: props.signup ? '' : saved_id,
  password: '',
  passwordConfirm: ''
})

const title = ref(props.signup ? '가입하기' : '입장하기')

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
  if (!props.signup && remember.value && credential.id.trim().length > 0) 
    useId(credential.id.trim(), { maxAge: 1000*60*60*24*365})  
}

const onAction = async () => {
  _prepareAction()
  _remember()

  if ((_check())) {
    const action = props.signup ? useAuth().signup : useAuth().login

    await action(credential.id, credential.password).then((result: boolean | string) => {
      if (props.signup) {
        welcome.value = true
      } else {
        window.opener.postMessage(result, '*')
        window.close()
      }
    }).catch(() => {
      message.value = `${title.value}에 실패했습니다.`
    }).finally(() => {
      pending.value = false
      credential.password = ''
      credential.passwordConfirm = ''
    })
  } else {
    pending.value = false
    message.value = `${title.value}에 실패했습니다.`
  }
}

const empty = (value: string) => useWarning.value && !value.length
const confirm = () => useWarning.value && credential.password != credential.passwordConfirm

const _check = () => {
  credential.id = credential.id.trim()
  credential.password = credential.password.trim()
  credential.passwordConfirm = credential.passwordConfirm.trim()
  return credential.id.length && credential.password.length && (
    !props.signup || credential.password == credential.passwordConfirm
  )
}
</script>

<template>
  <div v-if='pending' class='w-100 h-100 flex-center'>
    <Loader />
  </div>
  <div v-else class='flex-center h-100'>
    <div v-if='welcome' class='flex-column t-center'>
      <h1>회원가입이 완료됐습니다.</h1>
      <NuxtLink to='/auth/login'>로그인하기</NuxtLink>
    </div>
    <form v-else class='flex-column' @submit.prevent='onAction'>
      <h1>{{ title }}</h1>
      <div v-if='message' class='mb-3 t-danger t-center w-100'>{{ message }}</div>
      <div v-if='empty(credential.id)' class='t-danger t-sm pl-2 m-1'>⚠️ 아이디를
        적어주세요</div>
      <Input id="user_id" class='lg m-1' label='아이디'
        v-model='credential.id'></Input>
      <div v-if='empty(credential.password)' class='t-danger t-sm pl-2 m-1'>⚠️
        비밀번호를 적어주세요</div>
      <Input id="user_password" class='lg m-1' label='비밀번호' type='password'
        v-model='credential.password'></Input>

      <div v-if='signup' class='mb-4'>
        <div v-if='empty(credential.passwordConfirm)'
          class='t-danger t-sm pl-2 m-1'>⚠️ 비밀번호를 적어주세요</div>
        <div v-else-if='confirm()' class='t-danger t-sm pl-2 m-1'>⚠️ 비밀번호를 확인해주세요
        </div>
        <Input id="user_password_confirm" class='lg m-1' label='비밀번호'
          type='password' v-model='credential.passwordConfirm'></Input>
      </div>
      <div v-else class='mb-4 flex'>
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
        {{ title }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.checkbox {
  zoom: 0.9;
}
</style>
