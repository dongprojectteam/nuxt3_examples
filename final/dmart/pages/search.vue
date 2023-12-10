<script lang='ts' setup>
const { addCartItem } = useCart()

const fetchProducts = async () => {
  return useFetch<Product[]>('/products', {
    lazy: true,
    baseURL: useRuntimeConfig().public.apiBase,
  })
}

const filterProducts = () => {
  if (!products.value) return []

  return products.value.filter(product =>
    product.title.toLowerCase().includes(criteria.value) ||
    product.description.toLowerCase().includes(criteria.value)
  )
}

const criteria = computed(() => (useRoute().query.search as string).toLowerCase())
const { data: products, pending } = await fetchProducts()


const filteredProducts = computed(() => filterProducts())
const resultCount = computed(() => filteredProducts.value?.length)
</script>

<template>
  <NuxtLayout name='content'>
    <Loader v-if='pending'></Loader>
    <div v-else>
      <h2>🔎 <span class='t-primary'>{{ criteria }}</span> 검색 결과 :
        {{ resultCount }}
      </h2>

      <SearchProductCard v-for='product in filteredProducts' :key='product.id'
        :product='product' @to-cart='addCartItem'></SearchProductCard>
    </div>
  </NuxtLayout>
</template>