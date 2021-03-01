import snackbarMutations from './mutations.js';
import snackbarActions from './actions';
import snackbarGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
        visible: false,
        color: 'blue'
    };
  },
  mutations: snackbarMutations,
  actions: snackbarActions,
  getters: snackbarGetters,
};
