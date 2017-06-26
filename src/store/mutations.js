export const mutations = {
  updateCookie(state, newCookie) {
    state.cookie = newCookie;
  },
  isLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
  updateUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo;
  },
};
