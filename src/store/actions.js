import axios from 'axios';

const domain = 'http://localhost:3000';

export const login = ({ commit }, userReqInfo) => {
  axios.get(`${domain}/login/cellphone`, {
    params: {
      phone: userReqInfo.phone,
      password: userReqInfo.password,
    },
  })
  .then((res) => {
    console.log(res);
    if (res.status === 200) {
      const cookieObj = res.data.bindings[0];
      commit('updateCookie', cookieObj);
      commit('isLogin', true);
      Object.keys(cookieObj).forEach((key) => {
        document.cookie = `${key}=${cookieObj[key]};`;
      });
      const userInfo = {
        nickname: res.data.profile.nickname,
        ulevel: res.data.profile.userType,
        uid: res.data.profile.userId,
      };
      Object.keys(userInfo).forEach((key) => {
        document.cookie = `${key}=${userInfo[key]};`;
      });
      commit('updateUserInfo', userInfo);
      window.location = '#/user';
    } else if (res.status === 415) {
      // TODO:将来替换成弹窗组件
      console.log(res.msg);
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

export const getUserMusic = ({ commit, state }) => {
  axios.get(`${domain}/user/follows`, {
    params: {
      uid: state.userInfo.uid,
    },
  })
  .then((res) => {
    console.log(res);
    const usermusic = res.data.follow;
    commit('getUserMusic', usermusic);
  })
  .catch((err) => {
    console.log(err);
  });
};

export const getFans = ({ commit, state }) => {
  axios.get(`${domain}/user/followeds`, {
    params: {
      uid: state.userInfo.uid,
    },
  })
  .then((res) => {
    const fans = res.data.followeds;
    console.log(fans);
    commit('getFans', fans);
  });
};

export const getDynamic = ({ commit, state }) => {
  axios.get(`${domain}/user/event`, {
    params: {
      uid: state.userInfo.uid,
    },
  })
  .then((res) => {
    const dynamic = res.data.events;
    commit('getDynamic', dynamic);
  });
};

export const getRecord = ({ commit, state }) => {
  axios.get(`${domain}/user/playlist`, {
    params: {
      uid: state.userInfo.uid,
      // type: 1,
    },
  })
  .then((res) => {
    console.log(res);
    const record = res.data.playlist;
    commit('getRecord', record);
  });
};
