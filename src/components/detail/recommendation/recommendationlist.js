import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../../moviecards";

class Recommendations extends Component {
  movielist = [1,2,3,4]
  render() {
    let recommendationlist = this.movielist.map(() => {
      return (
        <div className="col s12 m6 l4 xl3">
          <cards.MiniMovieCard
            image_link="https://www.movienewsletters.net/photos/156876R1.jpg"
            movie_name="Ironman 3"
            movie_rating="9/10"
          />
        </div>
      );
    });
    return (
      <div class="recommendations">
        <div class="center-align label">
          <p>RECOMMENDATIONS</p>
        </div>
        <div class="recommend_wrapper">
          <div class="mod_row">
          {recommendationlist}
          </div>
        </div>
      </div>
    );
  }
}

export default Recommendations;