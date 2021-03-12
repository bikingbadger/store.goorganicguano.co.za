import productMutations from './mutations.js'
import productActions from './actions'
import productGetters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: '1liter.jpg',
          category: 'Liquid Fertilizer',
          name: '1 Lt Bottle',
          price: 30
        },
        {
          id: 'p2',
          image: '2liter.jpg',
          category: 'Liquid Fertilizer',
          name: '2 Lt Cans',
          price: 50
        },
        {
          id: 'p3',
          image: '5liter.jpg',
          category: 'Liquid Fertilizer',
          name: '5 Lt Agri Cans',
          price: 100
        },
        {
          id: 'p4',
          image: '25liter.jpg',
          category: 'Liquid Fertilizer',
          name: '25 Lt Cans',
          price: 450
        },
        {
          id: 'p5',
          image: 'tote.jpg',
          category: 'Liquid Fertilizer',
          name: '1000 Lt Flow Bins',
          price: 15000
        },

        {
          id: 'p6',
          image: 'tablets.jpg',
          category: 'Tablet Fertilizer',
          name: 'Tablets',
          price: 3.5
        },

        {
          id: 'p7',
          image: 'can.jpg',
          category: 'Tablet Fertilizer',
          name: 'Tube of 10',
          price: 65
        }
      ]
    }
  },
  mutations: productMutations,
  actions: productActions,
  getters: productGetters
}
