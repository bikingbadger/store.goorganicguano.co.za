import firebase from '@/plugins/firebase'

const orderRef = firebase.firestore().collection('/order')

export default {
  addItemToCart({ commit }, item) {
    commit('addItemToCart', item)
  },
  removeItemFromCart({ commit }, itemId) {
    commit('removeItemFromCart', itemId)
  },
  async checkout({ state, commit }) {
    const order = {
      contact: state.contactDetails,
      shipping: state.shippingDetails,
      items: state.cart
    }
    const createOrder = await orderRef.add(order)
    console.log(createOrder)
    commit('createOrder')
  }
}
