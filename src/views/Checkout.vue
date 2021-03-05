<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1">Contact Info</v-stepper-step>
            <v-divider />
            <v-stepper-step step="2" :complete="step > 2">Address Info</v-stepper-step>
            <v-divider />
            <v-stepper-step step="3">Done</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items> </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      step: 2,
    };
  },
};
</script>
