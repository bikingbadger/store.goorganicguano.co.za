export default {
  getCart(state) {
    return state.cart;
  },
  getCartCount(state) {
    return state.cart.length();
  },
};
