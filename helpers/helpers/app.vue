<script lang='ts' setup>
let randomIds = ref<string[]>([])

const { getRandomId } = useRandomId()
for (let i = 0 ; i < 10 ; i++) 
  randomIds.value.push(getRandomId(undefined, 'prefix'))
</script>

<template>
  <div>
    <button @click='newWindow("http://www.google.com")'>New Window To Google</button>
    <hr />
    <p v-for='id in randomIds' :key='id'>{{  id }}</p>
    <hr />
    <p>{{ toDollar(1000000) }}</p>
  </div>
</template>

