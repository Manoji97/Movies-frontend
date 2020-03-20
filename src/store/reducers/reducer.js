import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  searchstring: "/?",
  pagenumber: 1,
  isLoading: false,
  user: {
    username: "",
    isLoggedin: false,
    token: ""
  },
  datalist: {
    count: "",
    next: "",
    previous: "",
    results: []
  },
  moviedata: {}
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actiontypes.singleHomeLoad:
      state = {
        ...state,
        datalist: action.value,
        searchstring: action.searchstring
      };
      break;
    case actiontypes.pagenumone:
      state = {
        ...state,
        pagenumber: action.value
      };
      break;
    case actiontypes.loading:
      state = {
        ...state,
        isLoading: action.value
      };
      break;

    case actiontypes.goDetail:
      state = {
        ...state,
        moviedata: action.value
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

export default reducer;
