<template>
  <v-card outlined min-width="100%" class="mb-4 p-4">
    <div class="d-flex">
      <div>
        <v-img :src="require('@/assets/' + item.image)" width="120px" height="120px"></v-img>
      </div>
      <div class="d-flex flex-column justify-center align-start ">
        <v-card-title class="pt-2">{{ item.name }}</v-card-title>
        <v-card-subtitle>R{{ item.price }}</v-card-subtitle>
        <v-card-text>Qty {{ item.qty }}</v-card-text>
        <v-btn color="error" outlined small class="ml-4"
          ><v-icon small left>mdi-minus</v-icon>Remove</v-btn
        >
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  methods: {},
};
</script>
