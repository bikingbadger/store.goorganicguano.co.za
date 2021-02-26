<template>
  <v-sheet :height="sheetHeight" color="red">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <h1 class="text-center display-3 hidden-xs-only">
          Welcome to the Go Organic's Shop
        </h1>
        <h1 class="text-center display-2 hidden-sm-and-up">
          Welcome to the Go Organic's Shop
        </h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '200px';
        case 'sm':
          return '300px';
        case 'md':
          return '300px';
        case 'lg':
          return '300px';
        case 'xl':
          return '350px';
      }
      return '300px';
    },
  },
};
</script>
