<script lang='ts' setup>
const props = withDefaults(defineProps<{
  count?: number
}>(),
  {
    count: 0
  })

const emits = defineEmits(['change'])
const onUp = () => emits('change', props.count + 1)
const onDown = () => {
  if (props.count - 1 >= 1)
    emits('change', props.count - 1)
}
</script>

<template>
  <div class='flex-vcenter'>
    <div class='counter-button cursor border-inactive mr-1 t-center'
      @click='onDown'>-
    </div>
    <div class='counter-number t-center'>{{ count }}</div>
    <div class='counter-button cursor border-inactive ml-1 t-center'
      @click='onUp'>+
    </div>
  </div>
</template>

<style scoped>
.counter-button {
  width: 25px;
  height: 25px;
  line-height: 25px;
}

.counter-number {
  min-width: 25px;
}
</style>

