<template>
  <div class="play-item">
    <div class="cover" @click="showDetail">
      <img :src="playInfo.coverImgUrl" alt="歌单封面">
      <div class="info">
        <span>{{playInfo.playCount}}</span>
        <Icon type="ios-play-outline" class="playIcon"></Icon>
      </div>
    </div>
    <div class="title">
      <Tooltip :content="playInfo.name" placement="bottom">
        {{playInfo.name}}
      </Tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'play-item',
  data() {
    return {
    };
  },
  props: {
    playInfo: {
      type: Object,
      requred: true,
    },
  },
  methods: {
    showDetail() {
      this.$emit('showDetail', this.playInfo);
    },
  },
};
</script>

<style scoped lang="scss">
.play-item {
  width: 140px;
  display: inline-block;
  overflow: hidden;
  margin: 0 0 30px 50px;
  line-height: 1.4;
  .cover{
    width: 140px;
    height: 140px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all .5s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      transition: transform .5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
    .playIcon {
      float: right;
      margin-top: 7px;
    }
    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      padding: 0 10px;
    }
  }
  .title {
    cursor: pointer;
  }
  .ivu-tooltip {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
