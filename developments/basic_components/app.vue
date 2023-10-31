<script lang="ts" setup>
  const smChecked = ref(false)
  const mdChecked = ref(false)
  const lgChecked = ref(false)
</script>

<template>
  <div class="m-4">
    <Input id="input_form" type="input" label="sm" class="sm" />
    <Input id="input_form" type="input" label="md" class="md" />
    <Input id="input_form" type="input" label="lg" class="lg" />

    <hr class="my-4" />

    {{ `작은 크기의 체크박스 체크 여부: ${smChecked}` }}
    <Checkbox
      class="sm"
      label="레이블"
      v-model="smChecked"
      name="smallCheckbox"
    >
    </Checkbox>
    {{ `중간 크기의 체크박스 체크 여부: ${mdChecked}` }}
    <Checkbox class="md" label="중간 크기" checked v-model="mdChecked">
    </Checkbox>
    {{ `큰의 체크박스 체크 여부: ${lgChecked}` }}
    <Checkbox
      type="input"
      class="lg t-primary"
      label="큰 크기"
      v-model="lgChecked"
    >
    </Checkbox>
  </div>
</template>
