<template>
  <div class="login">
    <div class="wrap">
      <div class="form">
        <input type="phone" id="phone" placeholder="请输入手机号" v-model.trim="user">
        <input type="password" id="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="submit">
        <button class="btn-base" @click="handleSubmit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your login page',
      user: '',
      password: '',
    };
  },
  methods: {
    // ...mapActions(['login']),
    handleSubmit() {
      this.$store.dispatch('login', {
        phone: this.user,
        password: this.password,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/variable.scss';

.login{
  height: 100%;
  position: relative;
  .wrap{
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 12px 3px #dedede;
    .form {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
      input {
        display: block;
        margin: 0 auto;
        margin-bottom: 30px;
        height: 42px;
        width: 300px;
        padding-left: 10px;
        border: 1px solid #dedede;
        border-radius: 2px;
      }
    }
    .submit {
      position: absolute;
      bottom: 40px;
      text-align: center;
      width: 100%;
    }
  }
}
</style>
