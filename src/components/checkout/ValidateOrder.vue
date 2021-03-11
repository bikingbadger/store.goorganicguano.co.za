<template>
  <v-stepper-content step="3">
    <v-subheader class="title">
      Review Order
    </v-subheader>

    <v-content>
      <v-row>
        <v-col>
          <v-card elevation="2" outlined>
            <v-list-item v-for="(value, name) in data.contact" :key="name">
              <v-list-item-content>
                <v-list-item-title> {{ name }}: {{ value }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card></v-col
        ><v-col>
          <v-card elevation="2" outlined>
            <v-list-item v-for="(value, name) in data.shipping" :key="name">
              <v-list-item-content>
                <v-list-item-title> {{ name }}: {{ value }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card></v-col
        >
      </v-row>
    </v-content>

    <v-btn color="primary" @click="submitOrder">
      Submit
    </v-btn>

    <v-btn text @click="previous">
      Go Back
    </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    previous: Function,
    submitOrder: Function,
    data: Object
  }
}
</script>
