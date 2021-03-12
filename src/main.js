import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import firebase from '@/plugins/firebase'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
