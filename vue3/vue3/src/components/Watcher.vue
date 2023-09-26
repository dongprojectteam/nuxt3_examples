<script setup lang='ts'>
import { ref, reactive, watch, watchEffect } from 'vue'

const watchMessages = reactive<String[]>([])
const watchEffectMessages = reactive<String[]>([])
const refCount = ref(0)
const obj = reactive({
  objectCount: 0,
  objectToggle: false,
})

const refObj = ref({
  objectCount: 0
})

// 코드 1: ref 변수 감시 
watch(refCount, (newCount, prevCount) => watchMessages.push(`refCount ${prevCount} -> ${newCount}`))

// 코드 2: immediate 옵션 활성 
watch(refCount, (newCount, prevCount) => watchMessages.push(`refCount(immediate) ${prevCount} -> ${newCount}`), { immediate: true })

// 코드 3: 객체 감시 (deep 활성)
watch(obj, (newObj, prevObj) => watchMessages.push(`obj ${prevObj.objectCount} -> ${newObj.objectCount}`))

// 코드 4: 객체 속성 감시
watch(() => obj.objectCount, (newCount, prevCount) => watchMessages.push(`obj.objectCount ${prevCount} -> ${newCount}`))

// 코드 5: depp을 이용한 중첩값 감시
watch(refObj, () => watchMessages.push(`refObj.objectCount ${refObj.value.objectCount}`), { deep: true })

const USERS: { [key: number]: string } = {
  1: '1번 유저',
  2: '2번 유저',
  3: '3번 유저'
}
const userID = ref(1)

// 코드 6: userID 를 감시하는 동시에 사이드 이펙트 수행
watchEffect(() => {
  const user = USERS[userID.value]
  watchEffectMessages.push(`watchEffect Called ${user}`)
})

</script>

<template>
  <div id='root'>
    <h1>Watcher</h1>
    <button @click='refCount++'>refCount {{ refCount }}</button>
    <button @click='obj.objectCount++'>objectCount {{ obj.objectCount }}</button>
    <button @click='obj.objectToggle = !obj.objectToggle'>objectToggle {{ obj.objectToggle }}</button>
    <button @click='refObj.objectCount++'>refObj.objectCount {{ refObj.objectCount }}</button>
    <hr />
    <p v-for='message in watchMessages'>{{ message }}</p>
    <h1>watchEffect</h1>
    <button @click='userID++'>next user {{ userID }}</button>
    <p v-for='message in watchEffectMessages'>{{ message }}</p>
  </div>
</template>

<style scoped>
button {
  margin-right: 0.3rem;
}
</style>