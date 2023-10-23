<script setup lang='ts'>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
})

const _emits = defineEmits(['update:modelValue'])
const onInput = (event: Event) => _emits('update:modelValue', (event.target as HTMLInputElement).value)

const { id, label, type } = useAttrs() as Record<string, string>
const formId = id ?? `formID-${Math.round(Math.random() * 10000).toString()}`
</script>

<template>
  <span class="form-group">
    <input :id='formId' :type='type' class="form-control w-100" placeholder="" :value='modelValue' @input='onInput' />
    <label :for='formId'>{{ label }}</label>
  </span>
</template>

<style scoped>
.form-group {
  position: relative;
  display: inline-block;
}

input {
  padding-left: 5px;
  height: 100%;
  font-size: 0.9rem;
  font-family: 'Arial Black';
  border: 1px solid;
  border-radius: 5px;
  color: inherit;
  background-color: inherit;
  background-color: var(--color-white);
}


.form-group.md>input {
  font-size: 1.4rem;
}

.form-group.lg>input {
  font-size: 1.8rem;
}

.form-control {
  box-sizing: border-box;
}

.form-control:focus {
  box-shadow: none;
  outline: none;
  border: 1px solid var(--color-primary);
}

.form-control:focus+label,
.form-control:not(:placeholder-shown)+label {
  transform: translateY(-70%) scale(0.5);
  transform-origin: top left;
}

label {
  position: absolute;
  color: var(--color-primary);
  font-size: 0.9rem;
  font-family: 'Arial';
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: all .2s ease-out;
}

.md>label {
  font-size: 1.4rem;
}

.lg>label {
  font-size: 1.8rem;
}
</style>