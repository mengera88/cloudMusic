// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';

import './style/index.scss';

Vue.config.productionTip = false;
Vue.prototype.http = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // 监听路由检查登录
  // watch: {
  //   $route: 'checkLogin',
  // },
  // created() {
  //   this.checkLogin();
  // },
  // methods: {
  //   checkLogin() {
  //     if (!this.getCookie('session')) {
  //       // 如果没有登录状态则跳转到登录页
  //       this.$router.push('/login');
  //     } else {
  //       // 否则跳转到登录后的页面
  //       this.$router.push('/user_info');
  //     }
  //   },
  // },
});
