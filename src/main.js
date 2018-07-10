import Vue from 'vue'
import App from './App.vue'
import payload from './assets/backendTestPayload.js';

Vue.config.productionTip = false;

window.vue = new Vue({
  render: h => h(App, { props: { payload }})
}).$mount('#app');
