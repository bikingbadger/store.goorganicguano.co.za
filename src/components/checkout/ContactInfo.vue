<template>
  <v-stepper-content step="1">
    <v-text-field
      v-model="data.name"
      :rules="[rules.required]"
      label="Name"
      required
    />

    <v-text-field
      v-model="data.email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
      required
    />

    <v-text-field
      v-model="data.phone"
      :rules="[rules.required, rules.phone]"
      label="Phone Number"
      required
    />

    <v-btn @click="nextStep()" color="primary">Continue</v-btn>
    <v-btn @click="cancel" text>Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    next: Function,
    rules: Object,
    data: Object,
  },
  methods: {
    ...mapActions('cart', ['addContactDetails']),
    cancel() {
      this.$router.replace({ name: 'cart' });
    },
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

      this.addContactDetails(this.data);

      this.next();
    },
  },
};
</script>
