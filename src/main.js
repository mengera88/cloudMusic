// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

import App from './App';
import router from './router';
import store from './store';

import './style/index.scss';


axios.defaults.withCredentials = true;
Vue.config.productionTip = false;
Vue.prototype.http = axios;

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // watch: {
  //   $route: 'checkLogin',
  // },
  // methods: {
  //   checkLogin() {
  //     console.log();
  //   },
  // },
});
