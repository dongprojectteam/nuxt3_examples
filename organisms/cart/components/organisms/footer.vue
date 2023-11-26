<script lang='ts' setup>
const LINKS = ["공지사항", "점포안내", "Dmart 포인트"]
const REPRESENTATIVE = [
  "대표자: DOPT",
  "경기도 수원시 영통구",
  "사업자등록번호: 000-00-00000",
  "통신판매업 신고번호: 제0000-수원영통-00000호"
]
const PRIVACY = [
  "개인정보보호책임자: DOPT",
  "Fax: 031-0000-0000",
  "privacy@dmart.com"
]
</script>

<template>
  <NuxtLayout name='content' class='bg-inactive mt-4 mb-1 py-2 t-sm'>
    <span v-for='link in LINKS' :key='link' class='cursor t-bold mr-3'>
      {{ link }}
    </span>
  </NuxtLayout>
  <NuxtLayout name='content' class='mt-1'>
    <div><b>디마트닷컴</b></div>
    <div class='t-lg'><b>☎️1577-0000</b></div>
    <div>
      <span v-for='info in REPRESENTATIVE' :key='info' class='t-dark t-sm mr-2'>
        {{ info }}
      </span>
    </div>
    <div class='mb-4'>
      <span v-for='info in PRIVACY' :key='info' class='t-dark t-sm mr-2'>
        {{ info }}
      </span>
    </div>
  </NuxtLayout>
</template>


