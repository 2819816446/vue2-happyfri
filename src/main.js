import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import  './config/res.js'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
