import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  isModalOpen: false,
  user: {
    username: "",
    isLoggedin: false,
    token: "",
    errormessage: ""
  },
  register: {
    usernameerror: "",
    passworderror: "",
    success: false
  }
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
      let loginerr = "";
      if (!action.value.success) {
        loginerr = action.value.logedindata.non_field_errors
          ? action.value.logedindata.non_field_errors[0]
          : "";
      }

      state = {
        ...state,
        user: {
          ...state.user,
          username: action.value.success
            ? action.value.logedindata.username
            : "",
          token: action.value.success ? action.value.logedindata.token : "",
          isLoggedin: action.value.success ? true : false,
          errormessage: loginerr
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

    case actiontypes.Register:
      let nameerror = "";
      let passerror = "";
      if (!action.value.success) {
        nameerror = action.value.registerdata.username
          ? action.value.registerdata.username[0]
          : "";
        passerror = action.value.registerdata.password
          ? action.value.registerdata.password[0]
          : "";
      }
      state = {
        ...state,
        register: {
          ...state.register,
          usernameerror: nameerror,
          passworderror: passerror,
          success: action.value.success ? true : false
        }
      };
      break;

    default:
      break;
  }
  return state;
};

export default Userreducer;
