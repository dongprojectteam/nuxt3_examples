<script setup lang='ts'>
const props = defineProps<{
  product: Product
}>()

const emits = defineEmits(['toCart'])
</script>

<template>
  <div class='card'>
    <div class='image-container'>
      <img :src='product.image' class='h-100 w-100' />
      <div class='cart rounded bg-white t-lg'
        @click='emits("toCart", product.id)'>🛒
      </div>
    </div>
    <div class='t-sm t-dark mt-1'>{{ product.title }}</div>
    <div class='t-md t-bold'>{{ product.price }}</div>
    <div v-if='product.rating' class='t-sm t-inactive'>
      <em>{{ `★ ${product.rating.rate} (${product.rating.count})` }}</em>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 300px;
}

.card .image-container {
  position: relative;
}

.card div:first-child {
  height: 200px;
}

.card .cart {
  position: absolute;
  bottom: 10%;
  right: 10%;
  text-shadow: 1px 1px;
}

.card .cart:hover {
  bottom: 9%;
  cursor: pointer;
}
</style>