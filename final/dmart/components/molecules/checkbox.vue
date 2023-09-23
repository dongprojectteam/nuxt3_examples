<template>
  <span class='box-form-group'>
    <input :id='boxFormId' v-model='check' v-bind='attrs' @change.stop='onChange'>
    <label :for='boxFormId'>{{ props.label }}</label>
  </span>
</template>

<script setup lang='ts'>
const props = defineProps({
  label: String,
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['change'])
const { class: _, ...attrs } = useAttrs()

const { id } = useAttrs() as Record<string, string>
const boxFormId = id ?? `boxFormId-${Math.round(Math.random() * 10000).toString()}`

const check = ref(props.modelValue)
const onChange = (event: Event) =>
  emits('change', (event.target as HTMLInputElement).checked)

</script>