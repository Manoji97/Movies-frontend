import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../../moviecards";

import * as actioncreators from "../../../store/actions/actioncreators";

import { connect } from "react-redux";

class Recommendations extends Component {
  componentDidMount() {
    this.props.p_get_recommendations(this.props.movieId);
  }

  componentDidUpdate(prevprops) {
    if (prevprops.movieId != this.props.movieId) {
      this.props.p_get_recommendations(this.props.movieId);
    }
  }

  render() {
    let recommendationlist = this.props.p_recommendation_lst.map(item => {
      return (
        <div className="col s12 m6 l4 xl3" key={item.id}>
          <cards.MiniMovieCard
            detail_link={"/" + item.id}
            image_link={item.Image_link}
            movie_name={item.Title}
            movie_rating={item.Rating}
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
          <div class="mod_row">{recommendationlist}</div>
        </div>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_recommendation_lst: state.recommendations.recommendations
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    p_get_recommendations: movieId =>
      dispatch(actioncreators.GetRecommendations(movieId))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Recommendations);
