<template>
<transition name="fade">
    <div class="toast" v-if="isShow" :style="{background: backgroundColor}">{{message}}</div>
</transition>
</template>

<script>
const SUCCESS = '#33cc99';
const ERROR = '#e65c5c';
const WARNING = '#f3b230';
const INFO = '#1aabff';

export default {
  name: 'toast',
  data() {
    return {
      timer: null,
      isShow: false,
      message: '',
      type: '',
      duration: null,
    };
  },
  computed: {
    backgroundColor() {
      if (this.type === 'success') {
        return SUCCESS;
      } else if (this.type === 'error') {
        return ERROR;
      } else if (this.type === 'warning') {
        return WARNING;
      }
      return INFO;
    },
  },
  methods: {
    show() {
      this.isShow = true;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.isShow = false;
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="scss">
.toast{
    position: fixed;
    padding: 10px 30px;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: #1aabff;
    color: #fff;
    border-radius: 4px;
}
</style>
