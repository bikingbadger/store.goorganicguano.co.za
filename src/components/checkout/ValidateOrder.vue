<template>
  <v-stepper-content step="3">
    <v-subheader class="title">
      Review Order
    </v-subheader>

    <v-content>
      <v-row>
        <v-col>
          <v-card elevation="2" outlined>
            <v-card-title>Contact Details</v-card-title>
            <v-list-item v-for="(value, name) in data.contact" :key="name">
              <v-list-item-content>
                <v-list-item-title> {{ name }}: {{ value }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card></v-col
        ><v-col>
          <v-card elevation="2" outlined>
            <v-card-title>Shipping Details</v-card-title>
            <v-list-item v-for="(value, name) in data.shipping" :key="name">
              <v-list-item-content>
                <v-list-item-title> {{ name }}: {{ value }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Category
                  </th>
                  <th class="text-left">
                    Description
                  </th>
                  <th class="text-left">
                    Qty
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in getCartItems" :key="item.id">
                  <td>{{ item.category }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.qty }}</td>
                  <td>{{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="1"
          ><v-btn color="primary" @click="submitOrder">
            Submit
          </v-btn></v-col
        >
        <v-col md="1" offset="1">
          <v-btn text @click="previous">
            Go Back
          </v-btn></v-col
        >
        <v-col md="2" offset="6">Total R{{ getCartTotal }}</v-col>
      </v-row>
    </v-content>
  </v-stepper-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    previous: Function,
    submitOrder: Function,
    data: Object
  },
  computed: {
    ...mapGetters('cart', ['getCartItems', 'getCartCount', 'getCartTotal'])
  }
}
</script>
