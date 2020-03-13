import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../moviecards";
import Footer from "./footer";

class MovieList extends Component {
  state = {
    pagenumber: 1
  };

  data = {
    count: 3,
    movielist: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    next: "n_link",
    previous: null
  };

  render() {
    let Movies = this.data.movielist.map((item, index) => {
      return (
        <div className="col s12 m6 l4 xl3">
          <cards.MovieCard
            key={index}
            image_link="https://www.movienewsletters.net/photos/156876R1.jpg"
            movie_name="Ironman 3"
            movie_rating="9/10"
          />
        </div>
      );
    });
    return (
      <section className="main">
        <div className="row">{Movies}</div>
        <Footer
          count={this.data.count}
          presentpage={1}
          links={{
            next: this.data.next,
            previous: this.data.previous
          }}
        />
      </section>
    );
  }
}

export default MovieList;
