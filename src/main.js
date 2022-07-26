import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import { store } from './store/index';
import vuetify from './plugins/vuetify'


new Vue({
  render:h=>h(App),
  router,
  vuetify,
  store
}).$mount('#app');

