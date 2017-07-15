<template>
  <div class="user">
   <!--<h1>用户名</h1>
   <div @click="getUserMusic">{{userInfo.nickname}}</div>-->
  
      <div class="left">
        <span class="left-tit" @click="change">
          <span class="tri" v-bind:class="{tri1: isTri1, tri2: isTri2}"></span>
            创建的歌单（{{items.length}}）
          </span>
        <a href="" class="left-new">
          <span class="fs20 vam col-red mr5">+</span>
          <span>新建</span> 
        </a>
        <ul class="mt20" v-show="isShow">
          <li class="left-li" :key="index" v-for="(item, index) in items" >
            <img class="left-icon" :src="item.url">
            <div class="left-content">
              <p>{{item.title}}</p>
              <p class="number-col">{{item.number}}首</p>
            </div>
            <span class="li-icon">
              <a href="" class="li-icon1" title="编辑"></a>
              <a href="" class="li-icon2" title="删除"></a>
            </span>
           </li>
        </ul>
      </div>
      <div class="right">
        <div class="right-head">
          <div class="right-img"></div>
          <div class="right-title">
            <div class="right-title1">
              {{userInfo.nickname}}
              <span></span>
              <a href="">
                编辑个人资料
              </a>
             </div>
             <div class="right-title2">
                <a href="">
                  <p class="fs20">{{usermusic.length}}</p>
                  <p>粉丝</p>
                </a>
                <a href="">
                  <p class="fs20">{{dynamic.length}}</p>
                  <p>动态</p>
                </a>
                <a href="">
                  <p class="fs20">{{fans.length}}</p>
                  <p>关注</p>
                </a>
            </div>
             <div class="mt20">所在地区：<span>浙江省 - 杭州市</span></div>
             <div class="mt15 right-title3">社交网络：<span class="li-icon1"></span><span class="li-icon2"></span></div>
          </div>
        </div>
        <div class="right-content">
          <p class="content-title">
            <span class="fs16 mr20">听歌排行</span>
            <span>累计听歌<span>11</span>首</span>
            <a class="fr pt5">所有时间</a>
            <a class="fr ml10 mr10 pt5"> | </a>
            <a class="fr pt5">最近一周</a>
          </p>
          <ul>
            <li :key="index" v-for="(item, index) in items2" class="right-line">
              <ul>
                <li class="">{{index+1}}.</li>
                <li class="items3-icon"></li>
                <li><a href="" class="fwb mr10 ml20">{{item.title}}</a></li>
                <li> - </li>
                <li class="ml10">{{item.name}}</li>
                <li class="right-num"><div>{{item.number}}次</div></li>
                 <li class="items3-icon1">
                   <a class="li-icon1" title="编辑"></a>
                   <a class="li-icon2" title="删除"></a>
                   <a class="li-icon1" title="收藏"></a>
                   <a class="li-icon2" title="分享"></a>
                 </li>
              </ul>
            </li>
          </ul>
          <p class="mt10 tar"><a href="">查看更多>></a></p>
        </div>
        <div>
           <p class="fs16 content-title">我创建的歌单（{{record.length}}）</p>
           <ul class="clearfix">
             <li :class="((index + 1) % 5 !== 0 ? 'mr39' : '')" class="right-pic" :key="index" v-for="(item, index) in items3" >
              <!--<a href="">
                <img src="" alt="">
              </a>
              <p>{{record.length?record[0].name:''}}</p>-->
              <a href="">
                <img :src="record[0].coverImgUrl" alt="图片" style="width: 100px; height: 100px; ">
              </a>
              <p class="mt5">{{index+1}}{{record.length?record[0].name:''}}</p>
             </li>
           </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// import axios from 'axios';
import img1 from '../assets/logo1.jpg';
import img2 from '../assets/logo2.jpg';
import img3 from '../assets/logo3.jpg';
import img4 from '../assets/logo4.jpg';
import img5 from '../assets/logo5.jpg';


const domain = 'http://localhost:3000';


export default {
  name: 'user',
  data() {
    return {
      msg: 'Welcome to user\'s page',
      isShow: true,
      isTri1: true,
      isTri2: false,
      items: [
      { url: img1, title: '我喜欢的音乐', number: 1 },
      { url: img2, title: '乡村风', number: 3 },
      { url: img3, title: 'DJ', number: 8 },
      { url: img4, title: '怀旧金曲', number: 3 },
      { url: img5, title: '伤感情歌', number: 9 },
      ],
      items2: [
        { title: '谁明浪子心', name: '王杰', number: 1 },
        { title: '雨一直下', name: '张宇', number: 3 },
        { title: '三打白骨精', name: '齐天大圣', number: 8 },
        { title: '谁明浪子心1', name: '王杰1', number: 1 },
        { title: '雨一直下1', name: '张宇1', number: 3 },
        { title: '三打白骨精1', name: '齐天大圣1', number: 8 },
      ],
      items3: [
      { url: img1, title: '我喜欢的音乐', number: 1 },
      { url: img2, title: '乡村风', number: 3 },
      { url: img3, title: 'DJ', number: 8 },
      { url: img4, title: '怀旧金曲', number: 3 },
      { url: img5, title: '伤感情歌', number: 9 },
      { url: img4, title: '怀旧金曲', number: 3 },
      { url: img5, title: '伤感情歌', number: 9 },
      { url: img1, title: '我喜欢的音乐', number: 1 },
      { url: img2, title: '乡村风', number: 3 },
      { url: img3, title: 'DJ', number: 8 },
      { url: img4, title: '怀旧金曲', number: 3 },
      { url: img5, title: '伤感情歌', number: 9 },
      { url: img4, title: '怀旧金曲', number: 3 },
      { url: img5, title: '伤感情歌', number: 9 },
      ],
    };
  },
  computed: {
    ...mapState([
      'userInfo',
      'usermusic',
      'dynamic',
      'fans',
      'record',
    ]),
  },
  created() {
    this.getUserMusic();
    this.getFans();
    this.getDynamic();
    this.getMusic();
    this.getRecord();
  },
  methods: {
    ...mapActions([
      'getUserMusic',
      'getFans',
      'getDynamic',
      'getRecord',
    ]),
    getMusic() {
      this.http.get(`${domain}/user/subcount`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    change() {
      if (this.isTri1) {
        this.isShow = false;
        this.isTri1 = false;
        this.isTri2 = true;
      } else {
        this.isShow = true;
        this.isTri1 = true;
        this.isTri2 = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user{
  width:100%;
  font-size: 12px;
  height:100%;
}
.left{
  float:left;
  width:20%;
  border:1px solid #e8e8e8;
  padding-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;
  height:100%;
}
.left-tit{
  font-size: 14px;
  color:#000;
  cursor:pointer;
}
.tri{
  display:inline-block;
  height: 20px;
  width:20px; 
  vertical-align: middle; 
}
.tri1{
  background: url('../assets/arrow.png') no-repeat 62% 92%
}
.tri2{
  background: url('../assets/arrow.png') no-repeat 60% 32%
}
.li-icon1{
  background: url('../assets/icon3.png') no-repeat 9% 25%
}
.li-icon2{
  background: url('../assets/icon3.png') no-repeat 9% 65%
}
.left-new{
  border:1px solid #e8e8e8;
  font-size: 12px;
  color:#999;
  padding: 5px;
  margin-left: 20px;
  border-radius: 5px;
  background: #F1F1F1;
}
.left-new:hover{
   background: #fff;
}
.left-li{
    height: 52px;
    padding: 6px 0 6px 20px;
    position: relative;
}
.left-li:hover{
  background: #f1f1f1;
  cursor: pointer;
  .li-icon{
    display:block;
  }
}
.left-icon{
  width:40px;
  height:40px;
}
.left-content{
 display: inline-block;
 width:150px;
 vertical-align: top;
}
.left-content>p{
  height:20px;
  line-height: 20px;
}
.number-col{
  color:#999;
}
.li-icon{
  position: absolute;
  width:60px;
  height: 20px;
  right:0;
  top:48%;
  display:none;
}
.li-icon>a{
  display: inline-block;
  height:20px;
  width:28px;
}
.right{
  float:right;
  width:80%;
  padding: 50px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
.right-head{
  width:900px;
  height:200px;
}
.right-img{
  float:left;
  width:200px;
  height:200px;
  border:1px solid #e8e8e8;
}
.right-title{
  float:right;
  width:700px;
  padding-left: 50px;
  height:200px;
}
.right-title1{
  font-size: 24px;
  color:#000;
  padding:10px 0;
  border-bottom:2px solid #e8e8e8;
  >a{
    font-size: 12px;
    color:#999;
    padding:8px 15px;
    border:1px solid #e8e8e8;
    border-radius: 5px;
    float:right;
    &:hover{
      background: #e8e8e8;
    }
  }
  >span{
    display: inline-block;
    height:20px;
    width:50px;
    vertical-align: middle;
    background: url('../assets/icon3.png') no-repeat 35% 45%
  }
}
.right-title2{
  height:40px;
   >a{
     float:left;
    padding:5px 40px 5px 0;
    color:#999;
    &:hover{
      color:#2d8cf0;
      }
    }
  }

.right-title3>span{
  display: inline-block;
  height:20px;
  width:40px;
}
.right-content{
  margin-top: 50px;
}
.content-title{
  border-bottom:2px solid #a51515;
  padding-bottom: 10px;
}
.right-line{
  height:50px;
  border-left: 1px solid #e8e8e8;
  border-right:1px solid #e8e8e8;
  padding-left: 20px;
  line-height: 50px;
  background: #eee;
  >ul>li{
    float:left;
  }
  &:hover{
     background: #e8e8e8;
     .items3-icon1{
       display: block;
     }
  }
}
.right-num{
  width:300px;
  float:right !important;
  >div{
    background: #EEF8FE;
    opacity: 0.5;
  }
}
.items3-icon{
  width:50px;
  height:50px;
  background: url('../assets/icon3.png') no-repeat 20% 45%;
  &:hover{
    background: url('../assets/icon3.png') no-repeat 9% 45%;
  }
}
.items3-icon1{
  width:150px;
  height:50px;
  float:right !important;
  display: none;
  >a{
    display: inline-block;
    width:30px;
    height:50px;
  }
}
.right-pic{
  float:left;
  width:150px;
  height:165px;
  border: 1px solid;
  margin-top: 20px;
  >a{
    display: inline-block;
    width:150px;
    height:140px;
    text-align: center;
  }
}
</style>
