<template>
  <v-card outlined>
    <v-card-title>Checkout</v-card-title>
    <v-card-text>
      <v-text-field label="name" />
      <v-text-field label="email" />
      <p>Total: R100</p>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    checkout() {
      console.log('Checking out');
    },
  },
};
</script>
