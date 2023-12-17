<script lang='ts' setup>
const props = defineProps<{
  loggedin: boolean,
  user: UserData | null,
  summation: number,
  selectedProducts: Product[]
}>()

const emits = defineEmits(['login'])

const addressToString = (user: UserData) => `[${user.address.zipcode}] ${user.address.street} ${user.address.number}, ${user.address.city} `

const selectedProductCount = computed(() => props.selectedProducts.length)
</script>

<template>
  <div class='summary border-inactive flex-column'>
    <div class='bg-white p-2'>
      <div v-if='loggedin && user'>
        <h3 class='m-0'>{{ user.username }}</h3>
        <div>{{ addressToString(user) }}</div>
      </div>
      <div v-else>
        <div>로그인을 하세요</div>
        <div class='t-sm t-dark'>
          장바구니의 제품을 구매하기 위해선 로그인이 필요합니다.
        </div>
        <div class='flex-center pt-2'>
          <button class='w-100 sm' @click='emits("login")'>
            로그인하기
          </button>
        </div>
      </div>
    </div>
    <div class='total p-2 flex-column'>
      <div>
        <div class='mb-2'>👜 선택상품 {{ selectedProductCount }}개</div>
        <CartSummaryProduct v-for='product in selectedProducts' :key='product.id'
          :product='product'></CartSummaryProduct>
      </div>
      <div class='mt-3'>
        <div class='flex'>
          <span class='mr-auto'>주문 금액</span>
          <span>${{ summation }}</span>
        </div>
        <div class='flex'>
          <span class='mr-auto'>배송비</span>
          <span>+ $0</span>
        </div>
        <hr class='border-inactive' />
        <div class='flex-vcenter'>
          <span class='mr-auto t-danger'><b>결제 예정 금액</b></span>
          <span class='t-danger t-lg'><b>${{ summation }}</b></span>
        </div>
        <button v-if='loggedin' class='w-100 bg-danger t-white md'>주문하기</button>
      </div>      
    </div>
  </div>
</template>

<style scoped>
.total {
  flex-grow: 1;
  justify-content: space-between;
}

.summary {
  width: 250px;
}
</style>
