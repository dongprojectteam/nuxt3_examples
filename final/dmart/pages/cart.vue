<script setup lang='ts'>
const { loggedin, getCurrentUser } = useAuth()
const onToLogin = () => newWindow("/auth/login")
const userData = ref(null) as Ref<null | UserData>

if (loggedin.value) {
  const userInformation = await getCurrentUser()
  userData.value = userInformation.value
}

const { cartItems } = useCart()

const urls = cartItems.value.map(item => `/products/${item.id}`)
const promises = urls.map(url => useFetch(url, {
  baseURL: useRuntimeConfig().public.apiBase,
}))

const loading = ref(true)
const products = ref<Product[]>([])
Promise.all(promises).then(data => {
  loading.value = false
  products.value = data.map(item => {
    const product = (item.data.value as Product)
    const count = cartItems.value.find(item2 => item2.id === product.id)!.count

    return {
      ...product,
      count
    }
  })
})

const selectedProducts = computed(() => products.value.filter(product => product.selected))

const summation = computed(() => Math.round(products.value.filter(product => product.selected)
  .reduce((acc, product) => acc + product.price * product.count!, 0) * 100) / 100)
</script>

<template>
  <NuxtLayout name='content'>
    <Loader v-if='loading'></Loader>
    <div v-else>
      <div class='t-lg mt-4'>장바구니</div>
      <div class='flex'>
        <CartProducts class='cart' @login='onToLogin'
          :loggedin='loggedin'
          :products='products' :summation='summation'>
        </CartProducts>
        <div>
          <CartSummary class='summary' @login='onToLogin' :loggedin='loggedin'
            :user='userData' :selected-products='selectedProducts'
            :summation='summation'>
          </CartSummary>
        </div>
      </div>

      <CartFooter class='mt-4'></CartFooter>
    </div>

  </NuxtLayout>
</template>

<style scoped>
.cart {
  min-height: 400px;
  min-width: 750px;
}

.summary {
  min-height: 400px;
}
</style>