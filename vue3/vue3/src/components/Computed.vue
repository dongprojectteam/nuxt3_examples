<script setup lang='ts'>
import { computed, reactive } from 'vue'

const store: {
  discounts: { id: number, name: string }[]
} = reactive({
  discounts: []
})

// 코드 1. 최근 할인 상품을 돌려줍니다. 
// const discountItem = computed(() => store.discounts.length ?
//   store.discounts.at(-1).id.toString() + '_' +
//   store.discounts.at(-1).name.toUpperCase() :
//   '')

const discountItem = computed({
  // 코드 2. 기존과 동일한 getter
  get() {
    return store.discounts.length ?
      store.discounts.at(-1).id.toString() + '_' +
      store.discounts.at(-1).name.toUpperCase() :
      ''
  },
  // 코드 3. 새롭게 정의한 setter
  set(newItem) {
    const [id, name] = newItem.split(' ')
    store.discounts.push({ id: Number(id), name })
  }
})

let productId = 0
const onAddDiscountItem = () => {
  // store.discounts.push({
  //   id: productId,
  //   name: `item이름`
  // })

  // 코드 4. Computed 속성의 setter 이용
  discountItem.value = `${productId} item이름`

  productId++
}
</script>

<template>
  <div id='root'>
    <div v-if='discountItem'>
      <h2>초 대박 할인 상품 입고!</h2>
      <p>{{ discountItem }}</p>
    </div>
    <button @click='onAddDiscountItem'>새 세일상품 등록</button>
  </div>
</template>

