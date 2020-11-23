import Vue from 'vue'
import DefaultHome from './DefaultHome.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(DefaultHome)
}).$mount('#app')
