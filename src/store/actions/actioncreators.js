import * as actiontypes from "./actiontypes";

import * as axios from "../../axioscreation";

export const HomeLoad = movielistdata => {
  return {
    type: actiontypes.onHomeLoad,
    value: movielistdata
  };
};

export const onHomeLoad = () => {
  return dispatch => {
    axios.Movielink.get()
      .then(res => {
        dispatch(HomeLoad(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const Mainsearch = search_value => {
  return {
    type: actiontypes.doMainsearch,
    value: [
      {
        title: "ironman",
        rating: "9/10"
      },
      {
        title: "ironman 2",
        rating: "8.5/10"
      }
    ]
  };
};

export const doMainsearch = search_value => {
  return dispatch => {
    dispatch(Mainsearch(search_value));
  };
};

export const Search = search_data => {
  return {
    type: actiontypes.doSearch,
    value: [
      {
        title: "ironman",
        rating: "9/10"
      },
      {
        title: "ironman 2",
        rating: "8.5/10"
      }
    ]
  };
};

export const doSearch = search_data => {
  return dispatch => {
    dispatch(Search(search_data));
  };
};

export const Detail = movie_id => {
  return {
    type: actiontypes.goDetail,
    value: {
      title: "Ironamn 2008",
      language: "English",
      genres: "action superhero",
      rating: "9/10",
      no_0f_users: "34673",
      your_rating: "9/10",
      directors: "nolan russo"
    }
  };
};

export const goDetail = movie_id => {
  return dispatch => {
    dispatch(Detail(movie_id));
  };
};

export const doLogin = user_info => {
  return {
    type: actiontypes.doLogin,
    value: user_info
  };
};
