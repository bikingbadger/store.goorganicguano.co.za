import productMutations from './mutations.js';
import productActions from './actions';
import productGetters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image: 'https://source.unsplash.com/zL21JJh2OAk/400x400',
          category: 'Liquid Fertilizer',
          name: '1 Lt Bottle',
          price: 30,
        },
        {
          id: 'p2',
          image: 'https://source.unsplash.com/9OPxXGEeLTM/400x400',
          title: 'Liquid Fertilizer',
          name: '2 Lt Cans',
          price: 50,
        },
        {
          id: 'p3',
          image: 'https://source.unsplash.com/ErMaQGihZvI/400x400',
          title: 'Liquid Fertilizer',
          name: '5 Lt Agri Cans',
          price: 100,
        },
        {
          id: 'p4',
          image: 'https://source.unsplash.com/jg5TOGJhq5M/400x400',
          title: 'Liquid Fertilizer',
          name: '25 Lt Cans',
          price: 450,
        },
        {
          id: 'p5',
          image: 'https://source.unsplash.com/lNBLj4fKDFs/400x400',
          title: 'Liquid Fertilizer',
          description: '1000 Lt Flow Bins',
          price: 15000,
        },
      ],
    };
  },
  mutations: productMutations,
  actions: productActions,
  getters: productGetters,
};
