<script setup lang='ts'>
const props = defineProps<{
  navItems: NavItem[]
}>()

const emits = defineEmits(['click'])
</script>

<template>
  <ul>
    <li v-for='item in props.navItems' :key='item.label'>
      <a class='cursor' @click='emits("click", item)'>{{ item.label }}</a>
      <span class='t-bold bg-primary t-white rounded mx-1 px-1' v-if='item.count'>
        {{ item.count }}
      </span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin-right: 1rem;
  padding: 0;
}

li {
  float: left;
}

li:not(:last-child):after {
  content: '·';
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
</style>