import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

export const addSearchUrl = searchurl => {
  return {
    type: actiontypes.changeSearchUrl,
    value: searchurl
  };
};

export const SingleHomeLoad = (movieListData, searchquery) => {
  return {
    type: actiontypes.singleHomeLoad,
    value: movieListData,
    searchstring: searchquery
  };
};

export const onSingleLoad = (
  pagedata = null,
  searchdata = null,
  searchstring = ""
) => {
  let searchquery = "";
  if (searchdata) {
    console.log("search");
    if (searchdata.search_type === "mainsearch") {
      searchquery = "?ms=" + searchdata.query;
      return dispatch => {
        axios.Movielink.get(searchquery)
          .then(res => {
            dispatch(SingleHomeLoad(res.data, searchquery));
          })
          .catch(err => console.log(err));
      };
    } else if (searchdata.search_type === "search") {
      searchquery =
        "?title=" +
        searchdata.query.title +
        "&year=" +
        searchdata.query.year +
        "&rating=" +
        searchdata.query.rating +
        "&genre=" +
        searchdata.query.genre;
      return dispatch => {
        axios.Movielink.get(searchquery)
          .then(res => dispatch(SingleHomeLoad(res.data, searchquery)))
          .catch(err => console.log(err));
      };
    }
  } else if (pagedata) {
    let pagequery = searchstring !== "" ? "&page=" : "?page=";
    return dispatch => {
      axios.Movielink.get(searchstring + pagequery + pagedata)
        .then(res => dispatch(SingleHomeLoad(res.data, searchstring)))
        .catch(err => console.log(err));
    };
  }
  return dispatch => {
    console.log("no search");
    axios.Movielink.get()
      .then(res => dispatch(SingleHomeLoad(res.data)))
      .catch(err => console.log(err));
  };
};

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
