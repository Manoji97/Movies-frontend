import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  searchstring: "/?",
  pagenumber: 1,
  isLoading: false,
  genrelist: [],
  isModalOpen: false,
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
        searchstring: action.searchstring,
        isLoading: false
      };
      break;
    case actiontypes.pagenumone:
      state = {
        ...state,
        pagenumber: action.value,
        isLoading: false
      };
      break;
    case actiontypes.loading:
      state = {
        ...state,
        isLoading: action.value
      };
      break;
    case actiontypes.getGenreList:
      state = {
        ...state,
        genrelist: action.value
      };
      break;
    case actiontypes.OpenModal:
      state = {
        ...state,
        isModalOpen: action.value
      };
      break;

    case actiontypes.goDetail:
      state = {
        ...state,
        moviedata: action.value,
        isLoading: false
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

    default:
      break;
  }
  return state;
};

export default reducer;
