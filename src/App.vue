<template>
  <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <top-nav></top-nav>
    <router-view />
  </v-app>
</template>

<script>
import TopNav from '@/components/nav/TopNav.vue';
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: 'store', icon: 'shopping-basket' },
        { title: 'Cart', link: 'cart', icon: 'shopping-cart' },
      ],
    };
  },
  components: {
    TopNav,
  },
};
</script>
