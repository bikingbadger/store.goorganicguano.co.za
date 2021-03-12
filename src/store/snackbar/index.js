import snackbarMutations from './mutations.js'
import snackbarActions from './actions'
import snackbarGetters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      visible: false,
      color: 'success',
      message: 'Success, item added to cart'
    }
  },
  mutations: snackbarMutations,
  actions: snackbarActions,
  getters: snackbarGetters
}
