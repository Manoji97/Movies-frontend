import React, { Component } from "react";

import MovieDetail from "./movie_detail/moviedetail";
import Recommendations from "./recommendation/recommendationlist";

import { connect } from "react-redux";

import * as actioncreators from "../../store/actions/actioncreators";
import Spinner from "../spinner";

class Detail extends Component {
  render() {
    let Detail = (
      <React.Fragment>
        <MovieDetail movieId={this.props.match.params.id} />
        <Recommendations />
      </React.Fragment>
    );
    return this.props.p_isloading ? <Spinner /> : Detail;
  }
}

const mapstatetoprops = state => {
  return {
    p_isloading: state.isLoading
  };
};

export default connect(mapstatetoprops)(Detail);
