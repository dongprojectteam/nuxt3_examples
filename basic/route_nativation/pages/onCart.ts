export const onCart = () => navigateTo({
  path: '/cart',
  query: {
    item: 1
  }
},
  {
    replace: true,
    external: false,
    open: {
      target: '_blank',
      windowFeatures: {
        width: 600,
        height: 400
      }
    }
  });
