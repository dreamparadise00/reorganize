import Vue from 'vue'
import App from './App'
import router from './router'
import  store from './vuex/store'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false;
require("./assets/js/rem.js");
require("./assets/css/reset.css");
/* eslint-disable no-new */
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
Vue.use(VueTouch,{name:'v-touch'});
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
