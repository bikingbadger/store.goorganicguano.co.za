<template>
  <v-app>
    <the-navigation></the-navigation>
    <router-view />
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/nav/TheNavigation.vue';
import TheFooter from '@/components/nav/TheFooter.vue';
export default {
  components: {
    TheFooter,
    TheNavigation,
  },
};
</script>
