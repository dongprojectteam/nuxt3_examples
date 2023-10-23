<script setup lang='ts'>
const props = defineProps({
  label: String,
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
const { class: _, ...attrs } = useAttrs()
const { id } = useAttrs() as Record<string, string>
const boxFormId = id ?? `boxFormId-${Math.round(Math.random() * 10000).toString()}`
const checked = computed(() => props.checked || props.modelValue)

const onChange = (event: Event) =>
  emits('update:modelValue', (event.target as HTMLInputElement).checked)
</script>

<template>
  <span class='flex-vcenter'>
    <input :id='boxFormId' :checked='checked' v-bind='attrs'
      @change.stop='onChange' />
    <label v-if='label' :for='boxFormId'>{{ label }}</label>
  </span>
</template>