<template>
  <v-card outlined>
    <v-card-title>Checkout</v-card-title>
    <v-card-text>
      <v-text-field label="name" />
      <v-text-field label="email" />
      <p>Total: R{{ getCartTotal }}</p>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('cart', ['getCartTotal']),
  },
  methods: {
    checkout() {
      console.log('Checking out');
    },
  },
};
</script>
