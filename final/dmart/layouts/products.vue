<script lang='ts' setup>
const { categories } = await useCategories()
const onClick = (category: Category) => navigateTo(`/products/${category.label}`)
</script>

<template>
  <div>
    <Category :categories='categories' @click='onClick'></Category>
    <NuxtLayout name='content'>
      <slot />
    </NuxtLayout>
  </div>
</template>