import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  isModalOpen: false,
  user: {
    username: "",
    isLoggedin: false,
    token: ""
  },
  logginmessage: "",
  signupmessage: ""
};

const Userreducer = (state = initialstate, action) => {
  switch (action.type) {
    case actiontypes.OpenModal:
      state = {
        ...state,
        isModalOpen: action.value
      };
      break;
    case actiontypes.doLogin:
      state = {
        ...state,
        user: {
          ...state.user,
          username: action.value.username,
          token: action.value.token,
          isLoggedin: true
        }
      };
      break;

    case actiontypes.doLogout:
      state = {
        ...state,
        user: {
          ...state.user,
          username: "",
          token: "",
          isLoggedin: false
        }
      };
      break;
  }
  return state;
};

export default Userreducer;
