export default (path: string) => {
  return navigateTo(path, {
    open: {
      target: '_blank',
      windowFeatures: {
        width: 500,
        height: 500,
      },
    },
  })
}
