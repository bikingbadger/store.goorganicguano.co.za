<template>
  <div>
    <v-card-title>Checkout</v-card-title>
    <v-card-text>
      <p>Total: R{{ getCartTotal }}</p>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </v-card-text>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['getCartTotal']),
  },
  methods: {
    checkout() {
      this.$router.push({ name: 'checkout' });
    },
  },
};
</script>
