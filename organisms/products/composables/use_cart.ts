export const useCart = () => {
  const cartItems = useCookie<CartItem[]>('_CI', { default: () => [] })

  const cartItemCount = computed(() => cartItems.value.length)

  const addCartItem = (id: number) => {
    const cartItem = cartItems.value.find((item) => item.id == id)

    if (cartItem) cartItem.count++
    else
      cartItems.value.push({
        id,
        count: 1,
      })
  }

  const deleteCartItem = (id: number) => {
    const index = cartItems.value.findIndex((item) => item.id == id)
    cartItems.value.splice(index, 1)
  }

  return {
    cartItems,
    cartItemCount,
    addCartItem,
    deleteCartItem,
  }
}
