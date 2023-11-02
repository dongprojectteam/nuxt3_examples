<script setup lang='ts'>
const props = defineProps<{
  categories: Category[]
}>()

const emits = defineEmits(['click'])
</script>

<template>
  <hr class='m-0 p-0 bg-white' />
  <div class='flex-center m-0 w-100 bg-default'>
    <div class='container t-center'>
      <button v-for='(category, index) in props.categories' :key='index'
        class='cursor' :class='{ active: category.active }'
        @click='emits("click", category)'>
        {{ category.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 35px;
}

.container button {
  width: 200px;
  border: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

button.active {
  background-color: var(--color-primary);
}
</style>