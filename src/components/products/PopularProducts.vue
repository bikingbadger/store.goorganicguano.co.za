<template>
  <v-container>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>
          Popular Products<v-btn
            to="store"
            class="primary--text text-lowercase"
            text
            >View All</v-btn
          >
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="product in popularProducts"
            :key="product.id"
          >
            <product-card :product="product" @add="addToCart"></product-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductCard from '@/components/products/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters('products', ['popularProducts'])
  },
  methods: {
    ...mapActions('cart', ['addItemToCart']),
    ...mapActions('snackbar', ['setVisible']),
    addToCart (cartItem) {
      this.addItemToCart(cartItem)
      this.setVisible(true)
    }
  }
}
</script>
