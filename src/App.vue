<template>
  <div id="app">
    <div class="g-head">
      <ul>
        <router-link tag="li" to="/">网易云音乐</router-link>
        <router-link tag="li" to='/recommend'>推荐</router-link>
        <router-link tag="li" to='/ranking'>排行榜</router-link>
        <router-link tag="li" to='/song_list'>歌单</router-link>
        <router-link tag="li" to='/dj'>主播电台</router-link>
        <router-link tag="li" to='/new_music'>最新音乐</router-link>
        <router-link v-if="!isLogin" tag="li" to='/login'>登录</router-link>
        <router-link v-else tag="li" to='/user'>{{userInfo.nick}}</router-link>
      </ul>
    </div>
    <div class="g-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { paserCookie } from './util/util';

export default {
  name: 'app',
  watch: {
    $route: 'checkLogin',
  },
  created() {
    this.checkLogin();
  },
  computed: {
    ...mapState([
      'isLogin',
      'userInfo',
    ]),
  },
  methods: {
    checkLogin() {
      const cookieObj = paserCookie(document.cookie);
      if (cookieObj.userId) {
        this.$store.commit('isLogin', true);
        this.$store.commit('updateUserInfo', {
          nick: cookieObj.nick,
          ulevel: cookieObj.userType,
          uid: cookieObj.userId,
        });
      } else {
        this.$store.commit('isLogin', false);
        this.$store.commit('updateUserInfo', {
          nick: null,
          ulevel: null,
          uid: null,
        });
      }
      if (!this.isLogin) {
        this.$router.push('/login');
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-width: 1200px;
  position: relative;
  height: 100%;
}
</style>
