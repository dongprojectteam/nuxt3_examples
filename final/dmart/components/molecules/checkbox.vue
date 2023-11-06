<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
defineOptions({ inheritAttrs: false })

const emits = defineEmits(['update:modelValue'])
const onChange = (checked: boolean) => emits('update:modelValue', checked)

const selected = ref(props.modelValue)

const {
  id: originalId,
  type: _,
  ...attrs
} = useAttrs() as Record<string, any>
const id = originalId ?? randomId('boxFormId')
const type = 'checkbox'

const fallThrough = reactive({
  ...attrs,
  id,
  type,
} as Record<string, any>)

if (
  attrs.checked != undefined &&
  attrs.checked !== false &&
  props.modelValue === false
) {
  onChange(true)
}

watch(
  () => props.modelValue,
  (newValue) => (selected.value = newValue)
)

onUpdated(() => {
  Object.assign(fallThrough, {
    ...useAttrs(),
    id,
    type,
  })
})
</script>

<template>
  <span class="vcenter" :class="useAttrs().class">
    <input v-bind="fallThrough" v-model="selected"
      @change.stop="onChange(($event.target as HTMLInputElement).checked)" />
    <label :for="id" class='ml-1'>
      <slot></slot>
    </label>
  </span>
</template>

<style scoped>
.vcenter {
  display: inline-flex;
  align-items: center;
}
</style>