import * as actiontypes from "../actions/actiontypes";

const initialstate = {
  searchstring: "/?",
  pagenumber: 1,
  isLoading: false,
  genrelist: [],
  datalist: {
    count: "",
    next: "",
    previous: "",
    results: []
  },
  moviedata: {}
};

const Moviereducer = (state = initialstate, action) => {
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
    case actiontypes.goDetail:
      state = {
        ...state,
        moviedata: action.value,
        isLoading: false
      };
      break;
  }
  return state;
};

export default Moviereducer;
