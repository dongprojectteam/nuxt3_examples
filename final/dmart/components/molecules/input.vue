<script setup lang='ts'>
defineProps({ modelValue: String })

const _emits = defineEmits(['update:modelValue'])
const onInput = (event: Event) => _emits('update:modelValue', (event.target as HTMLInputElement).value)

const { id, label, type } = useAttrs() as Record<string, string>
const formId = id ?? `formID-${Math.round(Math.random() * 10000).toString()}`
</script>

<template>
  <span class='form-group'>
    <input :id='formId' :type='type'
      class='form-input w-100 pl-1 h-100 t-sm t-bold rounded border bg-white'
      placeholder='' :value='modelValue' @input='onInput' />
    <label :for='formId' class='t-primary'>{{ label }}</label>
  </span>
</template>

<style scoped>
.form-group {
  position: relative;
  display: inline-block;
}

label {
  position: absolute;
  font-size: 0.9rem;
  font-family: 'Arial';
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: all .2s ease-out;
}

.form-input {
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border: 1px solid var(--color-primary);
}

.form-input:focus+label,
.form-input:not(:placeholder-shown)+label {
  transform: translateY(-70%) scale(0.5);
  transform-origin: top left;
}

.form-group.md>input,
.form-group.md>label {
  font-size: 1.4rem;
}

.form-group.lg>input,
.form-group.lg>label {
  font-size: 1.8rem;
}
</style>