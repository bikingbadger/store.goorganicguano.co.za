export default {
  allProducts (state) {
    return state.products
  },
  popularProducts (state) {
    return state.products.slice(0, 3)
  }
}
