<script lang='ts' setup>
const smChecked = ref(false)
const mdChecked = ref(false)
const lgChecked = ref(false)

const loading = ref(true)
</script>

<template>
  <Loader v-if='loading'></Loader>
  <div v-else class='m-4'>
    <Input id='input_form' type='input' label='sm' class='sm' />
    <Input id='input_form' type='input' label='md' class='md' />
    <Input id='input_form' type='input' label='lg' class='lg' />

    <hr class='my-4'>

    {{ `작은 크기의 체크박스 체크 여부: ${smChecked}` }}
    <div>
      <Checkbox id='small_box' class='sm' v-model='smChecked'
        name='smallCheckbox'>
        레이블
      </Checkbox>
    </div>
    {{ `중간 크기의 체크박스 체크 여부: ${mdChecked}` }}
    <div>
      <Checkbox class='md' checked v-model='mdChecked'>
        중간 크기
      </Checkbox>
    </div>
    {{ `큰의 체크박스 체크 여부: ${lgChecked}` }}
    <div>
      <Checkbox type='input' class='lg t-primary' v-model='lgChecked'>
        큰 크기
      </Checkbox>
    </div>
  </div>
</template>
