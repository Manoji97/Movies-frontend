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

const PageLoadFail = () => {
  return {
    type: actiontypes.PageLoadFail
  }
}

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
        .catch(() => dispatch(PageLoadFail()));
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

const headers = {
  "Content-Type": "application/json"
};

export const goDetail = (movie_id, token) => {
  let lheaders = headers;
  if (token !== "") lheaders = { ...headers, Authorization: `Token ${token}` };
  return dispatch => {
    axios.Movielink.get("/" + movie_id, {
      headers: lheaders
    })
      .then(res => {
        dispatch(Detail(res.data));
      })
      .catch(() => dispatch(PageLoadFail()));
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

const UpdateRating = (message, rating = null) => {
  return {
    type: actiontypes.updateRating,
    value: {
      message: message,
      newrating: rating
    }
  };
};

export const updateRating = (movieId, token, newrate) => {
  return dispatch => {
    axios.Movielink.post(`${movieId}/rate_movie/`, newrate, {
      headers: {
        ...headers,
        Authorization: `Token ${token}`
      }
    })
      .then(res => dispatch(UpdateRating("Successful", res.data.result.rating)))
      .catch(err => dispatch(UpdateRating("Failed")));
  };
};
