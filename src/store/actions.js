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
    if (res.status === 200) {
      const cookieObj = res.data.bindings[0];
      Object.keys(cookieObj).forEach((key) => {
        document.cookie = `${key}=${cookieObj[key]}; `;
      });
      commit('updateCookie', cookieObj);
      commit('isLogin', true);
      const userInfo = {
        nick: res.data.profile.nickname,
        ulevel: res.data.profile.userType,
        uid: res.data.profile.userId,
      };
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
