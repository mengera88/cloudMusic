<template>
  <div id="app">
    <div class="g-head">
      <ul>
        <li>
          <router-link to="/">网易云音乐</router-link>
        </li>
        <li>
          <router-link to='/recommend'>推荐</router-link>
        <li>
          <router-link to='/ranking'>排行榜</router-link>
        </li>
        <li>
          <router-link to='/song_list'>歌单</router-link>
        </li>
        <li>
          <router-link to='/dj'>主播电台</router-link>
        </li>
        <li>
          <router-link to='/new_music'>最新音乐</router-link>
        </li>
        <li>
          <router-link to='/login'>登录</router-link>
        </li>
      </ul>
    </div>
    <div class="g-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
