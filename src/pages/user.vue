<template>
  <div class="user">
   <h1>用户名</h1>
   <div>{{userInfo.nickname}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to user\'s page',
    };
  },
  computed: {
    ...mapState([
      'userInfo',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  padding-top: 20px;
  padding-left: 20px;
  line-height: 30px;
}
</style>
