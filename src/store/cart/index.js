import cartMutations from './mutations';
import cartActions from './actions';
import cartGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
      qty: 0,
      total: 0,
      contact: {},
      shipping: {},
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
