<script lang='ts' setup>
const props = withDefaults(defineProps<{
  loggedin: boolean,
  products: Product[],
  summation?: number
}>(),
  { summation: 0 })

const emits = defineEmits(['login'])

const { deleteCartItem } = useCart()
const onDeleteProduct = (id: number) => {
  deleteCartItem(id)

  const index = props.products.findIndex(item => item.id == id)
  props.products.splice(index, 1)
}

const onDeleteAll = () =>
  props.products.map(product => product.id).forEach(id => onDeleteProduct(id))

const onChangeCount = (count: { id: number, count: number }) =>
  props.products.find(product => product.id === count.id)!.count = count.count

  const onChangeSelected = (selected: { id: number, selected: boolean }) =>
  props.products.find(product => product.id === selected.id)!.selected = selected.selected

const selectAll = () =>
  props.products.forEach(product => product.selected = true)

const selectedAll = computed(() => props.products.every(product => product.selected))
</script>

<template>
  <div v-if='products.length' class='flex-column h-100 w-100 pr-2'>
    <div class='flex mt-4 t-sm t-dark mb-1'>
      <Checkbox name='selectAll' :checked='selectedAll' disabled
        class='mr-auto'>
        <a @click='selectAll' class='cursor'>전체 선택</a>
      </Checkbox>
      <div @click='onDeleteAll' class='cursor t-danger'>전체 삭제</div>
    </div>
    <hr class='w-100 my-1 border-dark' />
    <h2>전체 상품</h2>
    <CartProduct v-for='product in products' :product='product' :key='product.id'
      @delete-product='onDeleteProduct' @select='onChangeSelected'
      @count='onChangeCount'>
    </CartProduct>
    <div class='lg bg-white t-dark t-bold flex-center mt-1'>
      총 결제 금액 : ${{ summation }}
    </div>
  </div>
  <div v-else class='flex-center h-100'>
    <div class='flex-column t-center'>
      <div class='empty'>🛒</div>
      <div class='t-md p-2'>장바구니에 담긴 상품이 없습니다.</div>
      <button v-if='!loggedin' class='my-2 lg' @click='emits("login")'>
        로그인하기
      </button>
    </div>
  </div>
</template>

<style scoped>
.empty {
  font-size: 100px;
  display: block;
}
</style>
