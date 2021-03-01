export default {
  allProducts(state) {
    console.log(state.products);
    return state.products;
  },
  popularProducts(state) {
    return state.products.slice(0, 3);
  },
};
