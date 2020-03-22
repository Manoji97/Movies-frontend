import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

const Login = (login_data, username) => {
  return {
    type: actiontypes.doLogin,
    value: {
      username: username,
      token: login_data.token
    }
  };
};

export const doLogin = user_info => {
  return dispatch => {
    axios.Loginlink.post("auth/", user_info)
      .then(res => dispatch(Login(res.data, user_info.username)))
      .catch(err => console.log(err));
  };
};

export const doLogout = () => {
  return {
    type: actiontypes.doLogout
  };
};

export const performOpenModal = val => {
  return {
    type: actiontypes.OpenModal,
    value: val
  };
};
