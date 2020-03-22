import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

export {
  pageloading,
  onSingleLoad,
  Pagenumone,
  goDetail,
  getGenreList,
  updateRating
} from "./movieactioncreators";

export {
  performOpenModal,
  doLogout,
  doLogin,
  performRegister
} from "./useractioncreators";

/*
export const pageloading = (val = true) => {
  return {
    type: actiontypes.loading,
    value: val
  };
};

export const SingleHomeLoad = (movieListData, searchquery) => {
  return {
    type: actiontypes.singleHomeLoad,
    value: movieListData,
    searchstring: searchquery
  };
};

const querygenerator = searchobj => {
  let searchquery = "";
  for (const query in searchobj) {
    if (query !== "page") {
      searchquery +=
        searchobj[query] !== "" ? `&${query}=${searchobj[query]}` : "";
    }
  }
  searchquery = searchquery.slice(1);
  let searchwithpage = searchquery;
  searchwithpage += searchobj["page"] ? `&page=${searchobj["page"]}` : "";
  return {
    query: searchquery,
    querywithpage: searchwithpage
  };
};

export const onSingleLoad = (searchdata = null) => {
  if (searchdata) {
    let query = "/?";
    let allquery = querygenerator(searchdata.query);
    query += allquery.querywithpage;

    return dispatch => {
      dispatch(pageloading(true));
      axios.Movielink.get(query)
        .then(res => {
          dispatch(SingleHomeLoad(res.data, "/?" + allquery.query));
        })
        .catch(err => console.log(err));
    };
  }
  return dispatch => {
    dispatch(pageloading(true));
    axios.Movielink.get()
      .then(res => {
        dispatch(SingleHomeLoad(res.data, "/?"));
      })
      .catch(err => console.log(err));
  };
};

export const Pagenumone = (num = 1) => {
  return {
    type: actiontypes.pagenumone,
    value: num
  };
};

export const Detail = movie_data => {
  return {
    type: actiontypes.goDetail,
    value: movie_data
  };
};

export const goDetail = movie_id => {
  return dispatch => {
    axios.Movielink.get("/" + movie_id)
      .then(res => {
        dispatch(Detail(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const Login = (login_data, username) => {
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

const GenreList = genrelist => {
  return {
    type: actiontypes.getGenreList,
    value: genrelist
  };
};

export const getGenreList = () => {
  return dispatch => {
    axios.GneresLink.get()
      .then(res => dispatch(GenreList(res.data.results)))
      .catch(err => console.log(err));
  };
};

export const performOpenModal = val => {
  return {
    type: actiontypes.OpenModal,
    value: val
  };
};*/

/*
export const HomeLoad = movielistdata => {
  return {
    type: actiontypes.onHomeLoad,
    value: movielistdata
  };
};

export const onHomeLoad = (page_num = 1) => {
  return dispatch => {
    axios.Movielink.get("?page=" + page_num)
      .then(res => {
        dispatch(HomeLoad(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const Mainsearch = searchMoviedata_list => {
  return {
    type: actiontypes.doMainsearch,
    value: searchMoviedata_list
  };
};

export const doMainsearch = search_value => {
  return dispatch => {
    axios.Movielink.get("?ms=" + search_value)
      .then(res => {
        dispatch(Mainsearch(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const Search = search_data => {
  return {
    type: actiontypes.doSearch,
    value: search_data
  };
};

export const doSearch = search_data => {
  return dispatch => {
    axios.Movielink.get(
      "?title=" +
        search_data.title +
        "&year=" +
        search_data.year +
        "&rating=" +
        search_data.rating +
        "&genre=" +
        search_data.genre
    )
      .then(res => dispatch(Search(res.data)))
      .catch(err => console.log(err));
  };
};
*/
