<script setup lang='ts'>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
defineOptions({ inheritAttrs: false })

const emits = defineEmits(['update:modelValue'])
const onChange = (checked: boolean) => emits('update:modelValue', checked)
const selected = ref(props.modelValue)

const { id, type: _ } = useAttrs() as Record<string, string | boolean>
const boxFormId = (id ?? `boxFormId-${Math.round(Math.random() * 10000).toString()}`) as string

watch(() => props.modelValue, newValue => selected.value = newValue)
</script>

<template>
  <span class='flex-vcenter' :class='useAttrs().class'>
    <input type='checkbox' :id='boxFormId' v-bind='useAttrs()' v-model='selected'
      @change.stop='onChange(($event.target as HTMLInputElement).checked)' />
    <label v-if='useAttrs().label' :for='boxFormId'>
      {{ useAttrs().label }}
    </label>
  </span>
</template>