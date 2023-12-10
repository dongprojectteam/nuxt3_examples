<script lang='ts' setup>
defineProps<{
  product: Product
}>()
</script>

<template>
  <div class='flex my-1'>
    <div class='mr-1'>
      <img :src="product.image" class='small-image p-1' />
    </div>
    <div class='t-sm t-dark'>
      <span>{{ product.title.substring(0, 40) }}</span>
      <span v-if='product.title.length > 40'>...</span>

      <div class='count mt-1'>
        수량 {{ product.count }}개
      </div>
    </div>

  </div>
</template>

<style scoped>
.small-image {
  width: 50px;
  height: 50px;
}

.count {
  zoom: 0.8;
}
</style>

