<template>
  <v-stepper-content step="2">
    <v-text-field v-model="data.street" label="Street Address" required />

    <v-text-field v-model="data.city" label="City" required />

    <v-text-field
      v-model="data.postcode"
      label="Post Code"
      :rules="[rules.required, rules.zip]"
      required
    />

    <v-btn color="primary" @click="nextStep">
      Continue
    </v-btn>
    <v-btn text @click="previous">
      Go Back
    </v-btn>
  </v-stepper-content>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object,
  },
  methods: {
    ...mapActions('cart', ['addShippingDetails']),
    nextStep() {
      const formEntries = Object.entries(this.data);
      let fieldsValid = true;
      formEntries.forEach((entry) => {
        const [_inputName, inputValue] = entry;
        const currentValue = inputValue.trim();
        if (currentValue.length === 0) {
          fieldsValid = false;
        }
      });
      if (!fieldsValid) {
        return;
      }

      this.addShippingDetails(this.data);

      this.next();
    },
  },
};
</script>
