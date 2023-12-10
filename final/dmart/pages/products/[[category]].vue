<script setup lang='ts'>
const { categories, setActiveCategory } = await useCategories()

const route = useRoute()
const category = route.params.category as string
const categoryUrl = ref('products')


if (category) {
  setActiveCategory(category)

  const activeCategoryName = categories.value.find((category) => category.active)?.label
  categoryUrl.value = `products/category/${activeCategoryName}`
} else {
  setActiveCategory('home')
}

const { data, pending: loading, error } = await useFetch(categoryUrl.value, {
  baseURL: useRuntimeConfig().public.apiBase,
  lazy: true
})

if (error.value)
  throw createError('API server is down')
</script>

<template>
  <NuxtLayout name='products'>
    <ProductsGrid :loading='loading' :products='(data as Product[])'></ProductsGrid>
  </NuxtLayout>
</template>