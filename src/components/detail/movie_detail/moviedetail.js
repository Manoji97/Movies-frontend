import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import { connect } from "react-redux";
import * as actioncreators from "../../../store/actions/actioncreators";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.performgoDetail(this.props.movieId);
  }

  render() {
    return (
      <section className="mian">
        <div className="movie-detail row">
          <div className="col s12 m5 l4">
            <div className="image">
              <img src={this.props.pmovie_data.img_link} alt="" />
            </div>
          </div>
          <div className="col s12 m7 l8">
            <div className="content">
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Title</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.title}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Language</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.language}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Genres</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.genres}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.rating}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">No of users rated</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.no_0f_users}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">your Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.your_rating}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Directors</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.directors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapstatetoprops = state => {
  return {
    pmovie_data: state.moviedata
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performgoDetail: movie_id => dispatch(actioncreators.goDetail(movie_id))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieDetail);
