<script lang='ts' setup>
const props = defineProps<{
  product: Product
}>()

const emits = defineEmits(['delete-product', 'select', 'count'])
const selected = ref(props.product.selected || false)

const onChangeCount = (count: number) => {
  emits('count', {
    id: props.product.id,
    count
  })
}

watch(selected, (selected: boolean) => {
  emits('select', {
    id: props.product.id,
    selected
  })
})

watch(() => props.product, (product: Product) => selected.value = product.selected === true)
</script>

<template>
  <div class='flex my-1'>
    <div class='mr-auto flex'>
      <div class='p-1 mx-1 image-container'>
        <img :src='product.image' class='image' />
        <Checkbox class='floating-checkbox' v-model='selected'>
        </Checkbox>
      </div>
      <div class='p-1 mx-1 border-left-inactive'>
        <div class='category pb-1 t-bold'>
          {{ product.category }}
        </div>
        <div>
          {{ product.title }}
        </div>
      </div>
    </div>
    <div class='flex'>
      <div class='p-1 mx-1 price-container flex-column border-left-inactive'>
        <b class='t-lg'>{{ toDollar(product.price) }}</b>
        <CartCounter class='mt-2' @change='onChangeCount' :count='product.count'>
        </CartCounter>
      </div>
      <div class='p-1 mx-1 delete-container border-left-inactive'>
        <button class='delete-button bg-danger t-white w-100 sm'
          @click='emits("delete-product", product.id)'>삭제하기</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.image-container {
  position: relative;
}

.floating-checkbox {
  position: absolute;
  top: 0;
  left: 0;
}

.image {
  width: 100px;
  height: 100px;
}

.price-container {
  width: 100px;
}

.delete-container {
  width: 70px;
}
</style>

