// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "./assets/css/IniCSS.css";
import "./assets/css/index.css";

import Router from 'vue-router'

// import vuescroll from 'vuescroll';

// Vue.use(vuescroll, {
//   ops: {}, // 在这里设置全局默认配置
// });

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
