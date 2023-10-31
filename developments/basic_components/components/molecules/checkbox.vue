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
  const id = (originalId ??
    `boxFormId-${Math.round(Math.random() * 10000).toString()}`) as string
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
    console.log('updated')
    Object.assign(fallThrough, {
      ...useAttrs(),
      id,
      type,
    })
  })
</script>

<template>
  <span class="flex-vcenter" :class="useAttrs().class">
    <input
      v-bind="fallThrough"
      v-model="selected"
      @change.stop="onChange(($event.target as HTMLInputElement).checked)"
    />
    <label v-if="useAttrs().label" :for="id">
      {{ useAttrs().label }}
    </label>
  </span>
</template>
