import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

export const pageloading = (val = true) => {
  return {
    type: actiontypes.loading,
    value: val
  };
};

const SingleHomeLoad = (movieListData, searchquery) => {
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

const Detail = movie_data => {
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
