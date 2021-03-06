<template>
  <v-app>
    <the-navigation></the-navigation>
    <router-view />
    <!-- <v-snackbar
      v-model="visible"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="3000"
      :color="snackbarColor"
      >{{ getMessage }}
      <v-btn dark text @click="setVisible(false)">Close</v-btn>
    </v-snackbar> -->
    <!-- <the-footer></the-footer> -->
  </v-app>
</template>

<script>
import TheNavigation from '@/components/nav/TheNavigation.vue';
// import TheFooter from '@/components/nav/TheFooter.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GoOrganicsStore',
  components: {
    // TheFooter,
    TheNavigation,
  },
  computed: {
    ...mapGetters('snackbar', ['isVisible', 'snackbarColor', 'getMessage']),
    visible: {
      get() {
        return this.isVisible;
      },
      set(value) {
        this.setVisible(value);
      },
    },
  },
  methods: {
    ...mapActions('snackbar', ['setVisible']),
  },
};
</script>
