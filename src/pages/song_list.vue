<template>
  <div class="song-list">
    <ul>
      <li v-for="(playitem, index) in playlists" :key="index">
        <play-item :playInfo="playitem" @showDetail="showDetail($event)"></play-item>
      </li>
    </ul>
  </div>
</template>

<script>
import playItem from '@/components/playitem/playitem';

const domain = 'http://localhost:3000';

export default {
  name: 'song_list',
  data() {
    return {
      playlists: [],
    };
  },
  created() {
    this.getPlaylists();
  },
  methods: {
    getPlaylists() {
      this.http.get(`${domain}/top/playlist/highquality`)
      .then((res) => {
        console.log(res);
        this.playlists = res.data.playlists;
      });
    },
    showDetail(event) {
      console.log(event);
    },
  },
  components: {
    playItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.song-list {
  height: 100%;
  overflow: scroll;
  padding-top: 40px;
  ul {
    li {
      display: inline-block;
    }
  }
}
</style>
