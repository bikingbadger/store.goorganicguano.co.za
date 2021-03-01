<template>
  <div>
    <v-card-title>Cart ({{ getCartCount }})</v-card-title>
    <v-row v-for="item in getCartItems" :key="item.id"
      ><cart-card :item="item"></cart-card
    ></v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartCard from '@/components/cart/CartCard.vue';

export default {
  components: { CartCard },
  computed: {
    ...mapGetters('cart', ['getCartItems', 'getCartCount', 'getCartTotal']),
  },
  methods: {
    removeFromCart() {
      console.log('removing');
    },
  },
};
</script>
