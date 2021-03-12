import cartMutations from './mutations.js'
import cartActions from './actions'
import cartGetters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      qty: 0,
      total: 0,
      contactDetails: {},
      shippingDetails: {}
    }
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters
}
