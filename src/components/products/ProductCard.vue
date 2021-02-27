<template>
  <v-card outlined>
    <v-img :src="product.image"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>R{{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined>
        <v-icon large left>mdi-plus</v-icon>
        Add to Cart</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    addToCart: Function,
  },
};
</script>
