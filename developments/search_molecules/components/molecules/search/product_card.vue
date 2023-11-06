<script lang='ts' setup>
defineProps<{ product: Product }>()
const emits = defineEmits(['to-cart'])

const toCart = (id: number) => emits('to-cart', id)
</script>

<template>
  <div class='flex w-100 border-inactive my-1'>
    <div class='image t-center p-1'>
      <img :src="product.image" class='image-item' />
    </div>
    <div class='p-1 pl-2 border-left-inactive mr-auto'>
      <h3 class='t-primary m-0'>{{ product.title }}</h3>
      <p class='m-0'>{{ product.category }}</p>
      <p class='t-sm'>{{ product.description }}</p>
    </div>
    <div class='flex-column p-1 border-left-inactive price '>
      <h3 class='m-0 mb-auto'>${{ product.price }}</h3>
      <button class='w-100 sm bg-danger t-white'
        @click='toCart(product.id)'>담기</button>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.image {
  width: 100px;

  &-item {
    @extend .image;
    height: 120px;
  }
}

.price {
  min-width: 100px;
}
</style>

