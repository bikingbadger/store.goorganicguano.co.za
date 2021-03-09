export default {
  getCartItems (state) {
    return state.cart
  },
  getCartCount (state) {
    return state.cart.length
  },
  getCartTotal (state) {
    return state.total.toFixed(2)
  },
  getItemCount (state) {
    return state.qty
  }
}
