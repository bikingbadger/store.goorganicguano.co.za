import firebase from '@/plugins/firebase';

const orderRef = firebase.firestore().collection('/order');

export default {
  addItemToCart({ commit }, item) {
    commit('addItemToCart', item);
  },
  addContactDetails({ commit }, contact) {
    commit('addContactDetails', contact);
  },
  addShippingDetails({ commit }, contact) {
    commit('addShippingDetails', contact);
  },
  removeItemFromCart({ commit }, itemId) {
    commit('removeItemFromCart', itemId);
  },
  async checkout({ state, commit }) {
    const order = {
      contact: state.contact,
      shipping: state.shipping,
      items: state.cart,
    };
    await orderRef.add(order);
    commit('createOrder');
  },
};
