<template>
  <main>
    <header-hero />
    <v-container>
      <popular-products />
    </v-container>
  </main>
</template>

<script>
import HeaderHero from '@/components/home/HeaderHero.vue';
import PopularProducts from '@/components/products/PopularProducts.vue';

export default {
  name: 'Home',
  components: { HeaderHero, PopularProducts },
};
</script>
