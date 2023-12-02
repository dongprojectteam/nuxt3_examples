<script setup lang='ts'>
defineProps<{
  loading: boolean,
  products: Product[] | null
}>()

const { addCartItem } = useCart()
</script>

<template>
  <div v-if='loading'>
    <Loader />
  </div>
  <div v-else class='container p-3 pt-0'>
    <div v-for='product in products' :key='product.id' class='m-3'>
      <ProductCard :product='product' @to-cart='addCartItem'></ProductCard>
    </div>
  </div>
</template>

<style scoped lang='scss'>
// @use '~/assets/scss/variables' as *;

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));


  >* {
    padding: #{$space-sm};
  }
}
</style>