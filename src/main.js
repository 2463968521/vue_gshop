import Vue from 'vue'
import App from './App' //引入模块
import router from './router'

Vue.config.productionTip = false
/**
 * 入口js
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
})


