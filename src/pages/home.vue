<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showAlert">点我</button>
    <button @click="showToast">再点我</button>
    <!--<alert ref="alert" @cancel="cancel" @sure="sure">
      这是弹出框信息
    </alert>-->
  </div>
</template>

<script>
import alert from '@/components/alert/index';
import Toast from '@/components/toast/index';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    showAlert() {
      alert.confirm({
        message: '这是一个弹出框',
        context: this,
        cancelBtn() {
          this.showToast();
        },
      });
    },
    showToast() {
      Toast({
        message: '我也来',
        type: 'error',
        duration: 2000,
      });
    },
    cancel() {
      this.$refs.alert.close();
      console.log('点击了取消');
    },
    sure() {
      console.log('点击了确定');
      this.$refs.alert.close();
    },
  },
  components: {
    alert,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
