<template>
  <v-card outlined min-width="100%" class="mb-4 p-4">
    <v-list-item four-line>
      <v-list-item-content>
        <div class="overline mb-4">Qty {{ item.qty }}</div>
        <v-list-item-title class="headline mb-1">
          R{{ item.price }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
        <div>Total {{ itemTotal(item) }}</div>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"
        ><v-img :src="require('@/assets/' + item.image)"></v-img
      ></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn
        color="success"
        outlined
        small
        class="ml-4"
        @click="addItemToCart({ item: item, qty: 1 })"
      >
        <v-icon small left>mdi-plus</v-icon>
        Add</v-btn
      >
      <v-btn
        color="error"
        outlined
        small
        class="ml-4"
        @click="removeItemFromCart(item.id)"
        ><v-icon small left>mdi-minus</v-icon>Remove</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: Object
  },
  methods: {
    itemTotal (item) {
      return 'R' + (item.price * item.qty).toFixed(2)
    },
    ...mapActions('cart', ['removeItemFromCart', 'addItemToCart'])
  }
}
</script>
