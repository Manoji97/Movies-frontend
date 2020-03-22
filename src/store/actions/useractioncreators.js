import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

const Login = (success_bool, login_data) => {
  return {
    type: actiontypes.doLogin,
    value: {
      success: success_bool,
      logedindata: login_data
    }
  };
};

export const doLogin = user_info => {
  return dispatch => {
    axios.LoginLink.post("auth/", user_info)
      .then(res =>
        dispatch(
          Login(true, { username: user_info.username, token: res.data.token })
        )
      )
      .catch(err => dispatch(Login(false, err.response.data)));
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

const Register = (success_bool, data) => {
  return {
    type: actiontypes.Register,
    value: {
      success: success_bool,
      registerdata: data
    }
  };
};

export const performRegister = register_data => {
  return dispatch => {
    axios.BaseLink.post("signUp/", register_data)
      .then(res => {
        dispatch(Register(true, res.data));
      })
      .catch(err => dispatch(Register(false, err.response.data)));
  };
};
