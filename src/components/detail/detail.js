import React, { Component } from "react";

import MovieDetail from "./movie_detail/moviedetail";
import Recommendations from "./recommendation/recommendationlist";

const Detail = props => {
  return (
    <React.Fragment>
      <MovieDetail movieId={props.match.params.id} />
      <Recommendations />
    </React.Fragment>
  );
};

export default Detail;
