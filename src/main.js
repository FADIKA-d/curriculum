import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
