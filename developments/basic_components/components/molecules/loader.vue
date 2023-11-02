<template>
  <div class='loader-container flex-center w-100'>
    <div class='loader'>
      <div class='loader-inner'></div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.loader-container {
  min-height: 500px;
}

.loader {
  border: 5px solid var(--color-default);
  border-top: 5px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  width: 60px;
  height: 60px;

  &-inner {
    @extend .loader;
    width: 50px;
    height: 50px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>