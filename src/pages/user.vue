<template>
  <div class="user">
   <h1>用户名</h1>
   <div @click="getUserMusic">{{userInfo.nickname}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

const domain = 'http://localhost:3000';

export default {
  name: 'user',
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
  methods: {
    getUserMusic() {
      axios.get(`${domain}/user/subcount`, {
        uid: this.userInfo.userId,
      })
      .then((res) => {
        console.log(res);
      });
    },
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
