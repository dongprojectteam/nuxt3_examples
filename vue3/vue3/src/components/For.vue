<script setup lang='ts'>
import { reactive } from 'vue'

import Book from './Book.vue'

/* 코드 1: 4권의 책을 리스트로 준비 */
const books = reactive(['Book1', 'Book2', 'Book3', 'Book4',])
</script>

<template>
  <div id='root'>
    <p>현재 배열의 값</p>
    {{ books }}
    <hr />
    <p>Index를 키로 사용</p>
    <ul>
      <!-- 코드 2: 인덱스를 키로 사용 -->
      <li v-for='(book, index) in books' :key='index'>
        <Book :book='book' />
      </li>
    </ul>
    <hr />
    <p>book을 키로 사용</p>
    <ul>
      <!-- 코드 3: 책 이름을 키로 사용 -->
      <li v-for='book in books' :key='book'>
        <Book :book='book' />
      </li>
    </ul>

    <!-- 코드 4: 리스트의 처음을 삭제하는 버튼 -->
    <button @click='books.shift()'>Delete First</button>
  </div>
</template>

<style scoped>
hr {
  margin-top: 30px;
}
</style>