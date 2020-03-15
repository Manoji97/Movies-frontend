import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

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
    axios.Movielink.get("?title=" + search_value)
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

export const doLogin = user_info => {
  return {
    type: actiontypes.doLogin,
    value: user_info
  };
};
