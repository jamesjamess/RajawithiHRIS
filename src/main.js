import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Filters from "vue2-filters";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vue2Filters);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
