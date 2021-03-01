import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

// Modules
import ProductsModule from './products/index.js';
import SnackbarModule from './snackbar/index.js';
import CartModule from './cart/index.js';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
    products: ProductsModule,
    snackbar: SnackbarModule,
    cart: CartModule,
  },
});

export default store;
