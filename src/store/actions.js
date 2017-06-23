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
  })
  .catch((err) => {
    console.log(err);
  });
};
