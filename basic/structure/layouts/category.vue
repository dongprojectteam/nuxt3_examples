<template>
  <div>
    <header>
      <NuxtLink to='/bookstore'>서점으로 이동</NuxtLink>
    </header>
    <main>
      <slot name='it'></slot>
      <slot name='animation'></slot>
      <slot></slot>
    </main>
  </div>
</template>

