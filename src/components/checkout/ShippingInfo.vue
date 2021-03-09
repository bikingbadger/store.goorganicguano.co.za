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

    <v-btn color="primary" @click="next">
      Continue
    </v-btn>
    <v-btn text @click="previous">
      Go Back
    </v-btn>
  </v-stepper-content>
</template>

<script>
module.exports = {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object
  }
}
</script>
