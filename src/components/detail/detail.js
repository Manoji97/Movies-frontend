import React, { Component } from "react";

import MovieDetail from "./movie_detail/moviedetail";
import Recommendations from "./recommendation/recommendationlist";

import { connect } from "react-redux";

import * as actioncreators from "../../store/actions/actioncreators";
import Spinner from "../spinner";

class Detail extends Component {
  componentDidMount() {
    this.props.p_startloading();
  }
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

const mapdispatchtoprops = dispatch => {
  return {
    p_startloading: () => dispatch(actioncreators.pageloading())
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Detail);
