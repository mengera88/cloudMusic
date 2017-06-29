<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showAlert">点我</button>
    <alert ref="alert" @cancel="cancel" @sure="sure">
      这是弹出框信息
    </alert>
  </div>
</template>

<script>
import alert from '../components/alert/alert';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    showAlert() {
      this.$refs.alert.show();
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
