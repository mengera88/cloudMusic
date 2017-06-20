<template>
  <div id="app">
    <ul class="g-head">
      <li>
        <router-link to="/">网易云音乐</router-link>
      </li>
      <li>推荐</li>
      <li>排行榜</li>
      <li>歌单</li>
      <li>主播电台</li>
      <li>最新音乐</li>
      <li>登录</li>
    </ul>
    <router-view></router-view>
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
  text-align: center;
  color: #2c3e50;
}
</style>
