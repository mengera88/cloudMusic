import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import Recommend from '@/pages/recommend';
import Ranking from '@/pages/ranking';
import SongList from '@/pages/song_list';
import Dj from '@/pages/dj';
import NewMusic from '@/pages/new_music';
import Login from '@/pages/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking,
    },
    {
      path: '/song_list',
      name: 'song_list',
      component: SongList,
    },
    {
      path: '/dj',
      name: 'dj',
      component: Dj,
    },
    {
      path: '/new_music',
      name: 'new_music',
      component: NewMusic,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
