<template>
  <div>
    <v-app-bar color="green darken-3" class="white--text">
      <v-toolbar-title>Go Organic Guano</v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click="drawer = true" text>
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          text
          class="white--text"
        >
          <v-icon small left>mdi-{{ item.icon }}</v-icon>
          {{ item.title }}
          <v-badge
            v-if="item.badge && getItemCount > 0"
            color="green"
            bottom
            :content="getItemCount"
          ></v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: 'store', icon: 'store' },
        { title: 'Cart', link: 'cart', icon: 'cart', badge: true },
      ],
    };
  },
  computed: {
    ...mapGetters('cart', ['getItemCount']),
  },
};
</script>
