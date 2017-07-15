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
  getUserMusic(state, newUserMusic) {
    state.usermusic = newUserMusic;
  },
  getFans(state, newFans) {
    state.fans = newFans;
  },
  getDynamic(state, newDynamic) {
    state.dynamic = newDynamic;
  },
  getRecord(state, newRecord) {
    state.record = newRecord;
  },
};
