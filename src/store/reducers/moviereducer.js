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
  moviedata: {},
  movieratingmessage: "",
  commonerror: ""
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
        commonerror: "",
        isLoading: action.value
      };
      break;
    case actiontypes.getGenreList:
      let genres;
      if (action.value) {
        genres = action.value.map(item => {
          return {
            value: item.genre,
            inner: item.genre
          };
        });
      }

      state = {
        ...state,
        genrelist: genres
      };
      break;
    case actiontypes.goDetail:
      state = {
        ...state,
        moviedata: action.value,
        isLoading: false
      };
      break;
    case actiontypes.PageLoadFail:
      state = {
        ...state,
        commonerror: "Network Error",
        isLoading: false
      };
      break;
    case actiontypes.updateRating:
      let newrating = state.moviedata.Your_rating;
      if (action.value.message === "Successful") {
        newrating = action.value.newrating;
      }
      state = {
        ...state,
        moviedata: {
          ...state.moviedata,
          Your_rating: newrating
        },
        movieratingmessage: action.value.message
      };
      break;
    default:
      break;
  }
  return state;
};

export default Moviereducer;
