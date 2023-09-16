<template>
  <div>
    <p>접속 횟수 : {{ accessInformation.loginCount }}</p>
    <p>마지막 IP : {{ accessInformation.ip }}</p>
  </div>
</template>

<script setup lang='ts'>
import destr from 'destr'

const { ipAddress } = await $fetch('https://api.db-ip.com/v2/free/self') as any

const accessInformation = useCookie<{
  loginCount: number,
  ip: string
}>('accessInformation', {
  default: () => ({ loginCount: 0, ip: ipAddress }),
  watch: true, /* 반환값을 수정하면 쿠키도 값이 변경이 되어야 하는가? */
  maxAge: 60 * 10, /* 10분 후 만료 */
  expires: new Date('2023-11-27'), /* 특정한 날로 지정, 하지만 maxAge 보다 우선순위 낮음 */
  httpOnly: false, /* 클라이언트가 cookie 에 접근할 수 있는가? (document.cookie) */
  secure: false, /* https 에서만 쿠키를 전송할 것인가? */
  domain: 'localhost', /* localhost 에서만 사용 */
  path: '/', /* 쿠키 전달 경로를 제한할 수 있음 */
  sameSite: true, /* 동일한 사이트에서만 사용 가능 */
  encode: (value) => encodeURIComponent(typeof value === 'string' ? value : JSON.stringify(value)), /* encoding 방식 설정 */
  decode: (value) => destr(decodeURIComponent(value))
})

accessInformation.value.loginCount++
accessInformation.value.ip = ipAddress
</script>
