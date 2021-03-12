import firebase from '@/plugins/firebase'

const orderRef = firebase.firestore().collection('/order')

export default {
  addItemToCart({ commit }, item) {
    commit('addItemToCart', item)
  },
  addContactDetails({ commit }, contact) {
    commit('addContactDetails', contact)
  },
  addShippingDetails({ commit }, contact) {
    commit('addShippingDetails', contact)
  },
  removeItemFromCart({ commit }, itemId) {
    commit('removeItemFromCart', itemId)
  },
  async checkout({ state, commit }) {
    const order = {
      contact: state.contact,
      shipping: state.shipping,
      items: state.cart
    }
    const createOrder = await orderRef.add(order)
    console.log(createOrder)
    commit('createOrder')
  }
}
