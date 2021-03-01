import cartMutations from './mutations.js';
import cartActions from './actions';
import cartGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      cart: [],
    };
  },
  mutations: cartMutations,
  actions: cartActions,
  getters: cartGetters,
};
