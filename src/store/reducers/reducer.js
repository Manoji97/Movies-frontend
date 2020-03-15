import * as actiontypes from "../actions/actiontypes";

const initialstate = {
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
    case actiontypes.onHomeLoad:
      state = {
        ...state,
        datalist: action.value
      };
      break;
    case actiontypes.doMainsearch:
      state = {
        ...state,
        datalist: action.value
      };
      break;
    case actiontypes.doSearch:
      state = {
        ...state,
        datalist: action.value
      };
      break;
    case actiontypes.goDetail:
      state = {
        ...state,
        moviedata: action.value
      };
      break;
  }
  return state;
};

export default reducer;
