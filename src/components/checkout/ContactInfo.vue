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

    <v-btn @click="next()" color="primary">Continue</v-btn>
    <v-btn @click="cancel" text>Cancel</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    next: Function,
    rules: Object,
    data: Object,
  },
  methods: {
    cancel() {
      this.$router.replace({ name: 'cart' });
    },
  },
};
</script>
