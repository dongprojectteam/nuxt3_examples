<template>
  <span class="form-group">
    <input :id='formId' class="form-control" placeholder="" v-bind='$attrs' :value='value' @input='onInput' />
    <label :for='formId'>{{ props.label }}</label>
  </span>
</template>

<script setup lang='ts'>
const props = defineProps({
  label: String,
  value: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:value'])

const { id } = useAttrs() as Record<string, string>
const formId = id ?? `formID-${Math.round(Math.random() * 10000).toString()}`


const onInput = (event: Event) => emits('update:value', (event.target as HTMLInputElement).value)

</script>

<style scoped>
.form-group {
  position: relative;
}

input {
  padding-left: 5px;
  height: 100%;
  font-size: 0.9rem;
  font-family: 'Arial Black';
  border: 1px solid;
  border-radius: 5px;
}

.form-group.md>input {
  font-size: 1.4rem;
}

.form-group.lg>input {
  font-size: 1.8rem;
}

.form-control:focus {
  box-shadow: none;
  outline: none;
  border: 1px solid var(--dmart-primary);
}

.form-control:focus+label,
.form-control:not(:placeholder-shown)+label {
  transform: translateY(-70%) scale(0.5);
  transform-origin: top left;
}

label {
  position: absolute;
  color: var(--dmart-primary);
  font-size: 0.9rem;
  font-family: 'Arial';
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  transition: all .2s ease-out;
  margin: inherit;
}

.md>label {
  font-size: 1.4rem;
}

.lg>label {
  font-size: 1.8rem;
}
</style>