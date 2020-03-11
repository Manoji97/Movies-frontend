import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import MovieCard from "./moviecard";

const MovieList = props => {
  let Movies = props.movielist.map(() => {
    return(
      <div className="col s12 m6 l4 xl3">
      <MovieCard image_link="https://www.movienewsletters.net/photos/156876R1.jpg"
      
      movie_name="Ironman 3"
      movie_rating="9/10"
      />
    </div>
    );
  });

  return (
    <section className="main">
      <div className="row">{Movies}</div>
    </section>
  );
};

export default MovieList;
