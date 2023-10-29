<script setup lang='ts'>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
defineOptions({ inheritAttrs: false })

const emits = defineEmits(['update:modelValue'])
const emitChecked = (checked: boolean) => emits('update:modelValue', checked)

const { id, type: _, class: componentClass, ...attrs } = useAttrs() as Record<string, string | boolean>
const boxFormId = (id ?? `boxFormId-${Math.round(Math.random() * 10000).toString()}`) as string

const isChecked = attrs.checked !== undefined && (typeof attrs.checked === 'boolean' ? attrs.checked : true)
if (isChecked != props.modelValue)
  emitChecked(isChecked)

const onChange = (event: Event) =>
  emitChecked((event.target as HTMLInputElement).checked)
</script>

<template>
  <span>
    <span class='flex-vcenter' :class='componentClass'>
      <input type='checkbox' :id='boxFormId' v-bind='attrs'
        :class='componentClass' @change.stop='onChange' />
      <label v-if='attrs.label' :for='boxFormId'>{{ attrs.label }}</label>
    </span>
  </span>
</template>