export default {
  products(state) {
    return state.products;
  },
  popularProducts(state) {
    return state.products.slice(0, 3);
  },
};
