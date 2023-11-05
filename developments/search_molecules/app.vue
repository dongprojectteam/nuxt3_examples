<script lang='ts' setup>
const products: Product[] = [
  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 4.6,
      "count": 400
    }
  },
  {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 70
    }
  },
]

const cartItemsCount = ref(0)

</script>

<template>
  <div>
    <h1>장바구니로 전송된 수량 {{ cartItemsCount }}</h1>
    <h2>🔎 <span class='t-primary'>jewelery</span> 검색 결과 : 2</h2>

    <SearchProductCard v-for='product in products' :key='product.id'
      :product='product' @to-cart='cartItemsCount++'></SearchProductCard>
  </div>
</template>

