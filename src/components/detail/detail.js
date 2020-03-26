import React, { Component } from "react";

import MovieDetail from "./movie_detail/moviedetail";
import Recommendations from "./recommendation/recommendationlist";

import { connect } from "react-redux";

import * as actioncreators from "../../store/actions/actioncreators";
import Spinner from "../spinner";

class Detail extends Component {
  componentDidMount() {
    this.props.pstartloading();
  }
  render() {
    let Detail = (
      <React.Fragment>
        <MovieDetail movieId={this.props.match.params.id} />
        <Recommendations movieId={this.props.match.params.id} />
      </React.Fragment>
    );
    return this.props.p_isloading ? (
      <Spinner />
    ) : this.props.p_commonerror !== "" ? (
      <p>{this.props.p_commonerror}</p>
    ) : (
      Detail
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_isloading: state.movie.isLoading,
    p_commonerror: state.movie.commonerror
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    pstartloading: () => dispatch(actioncreators.pageloading())
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Detail);
