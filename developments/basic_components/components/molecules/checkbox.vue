<script setup lang='ts'>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['update:modelValue'])

const { id, type, ...attrs } = useAttrs() as Record<string, string>
const boxFormId = id ?? `boxFormId-${Math.round(Math.random() * 10000).toString()}`
const checked = computed(() => props.checked || props.modelValue)

const onChange = (event: Event) =>
  emits('update:modelValue', (event.target as HTMLInputElement).checked)
</script>

<template>
  <span class='flex-vcenter'>
    <input type='checkbox' :id='boxFormId' :checked='checked' v-bind='attrs'
      @change.stop='onChange' />
    <label v-if='attrs.label' :for='boxFormId'>{{ attrs.label }}</label>
  </span>
</template>

<style scoped></style>