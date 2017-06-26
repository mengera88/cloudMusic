<template>
  <div class="login">
    <div class="wrap">
      <div class="form">
        <input type="phone" id="phone" placeholder="请输入手机号" v-model.trim.number="user" v-on:blur="checkPhone" maxlength=11>
        <p>
          <span v-show="isPhoneValidate">请输入正确的手机号</span>
          <span v-show="isEmptyPhone">此手机号尚未注册</span>
        </p>
        <input type="password" id="password" placeholder="请输入密码" v-model="password" v-on:blur="checkPassword" maxlength=12>
        <p>
          <span v-show="isPasswordValidate">请输入正确的密码</span>
        </p>
      </div>
      <div class="submit">
        <button class="btn-base" @click="handleSubmit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      msg: 'Welcome to Your login page',
      user: '',
      password: '',
      isPhoneValidate: false,
      isEmptyPhone: false,
      isPasswordValidate: false,
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
    checkPhone() {
      const phoneReg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (!phoneReg.test(this.user)) {
        this.isPhoneValidate = true;
      } else {
        this.isPhoneValidate = false;
      }
    },
    checkPassword() {
      const passwordReg = /^[A-Za-z0-9]{6,12}$/;
      if (!passwordReg.test(this.password)) {
        this.isPasswordValidate = true;
      } else {
        this.isPasswordValidate = false;
      }
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
      p{
        height:30px;
        margin-left: 100px;
        line-height: 30px;
        font-size: 12px;
        color:#C10D0C;
      };
      input {
        display: block;
        margin: 0 auto;
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
