<template>
  <p v-if="!$route.params.child">parent</p>
  <p v-else>Child: {{ $route.params.child }}</p>
</template>
