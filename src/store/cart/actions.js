export default {
  addItemToCart({ commit }, item) {
    commit('addItemToCart', item);
  },
  removeItemFromCart({ commit }, itemId) {
    commit('removeItemFromCart', itemId);
  },
};
