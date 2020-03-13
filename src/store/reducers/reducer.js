import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  mainsearch: "",
  search: {
    moviename: "",
    genre: "",
    year: "",
    rating: ""
  },
  user: {
    username: "",
    password: "",
    isLoggedin: false,
    token: ""
  }
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actiontypes.doMainsearch:
      state = {
        ...state,
        mainsearch: action.value
      };
      break;

    case actiontypes.doSearch:
      state = {
        ...state,
        search: action.value
      };
      break;

    case actiontypes.doLogin:
      state = {
        ...state,
        user: {
          ...state.user,
          username: action.value.user.username,
          password: action.value.user.password
        }
      };
      break;
  }
  console.log(state);
  return state;
};

export default reducer;
