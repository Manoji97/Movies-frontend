import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import Star from "./starcomponent";
import StaticStar from "./staticstar";

import { connect } from "react-redux";
import * as actioncreators from "../../../store/actions/actioncreators";

class MovieDetail extends Component {
  componentDidMount() {
    this.props.performgoDetail(this.props.movieId);
  }

  joingenres = persondata => {
    if (persondata) {
      let genresnames = persondata.map(item => {
        return item.genre;
      });
      return genresnames.join(", ");
    }
  };
  joinnames = persondata => {
    if (persondata) {
      let personnames = persondata.map(item => {
        return item.Name;
      });
      return personnames.join(", ");
    }
  };

  render() {
    return (
      <section className="mian">
        <div className="movie-detail row">
          <div className="col s12 m5 l4">
            <div className="image">
              <img src={this.props.pmovie_data.Image_link} alt="" />
            </div>
          </div>
          <div className="col s12 m7 l8">
            <div className="content">
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Title</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.Title}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Runtime</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.RunTime}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Genres</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">
                    {this.joingenres(this.props.pmovie_data.Genres)}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Imdb Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">
                    <StaticStar rating={this.props.pmovie_data.Imdb_rating} />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">No of users rated</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.props.pmovie_data.Num_ratings}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">your Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">
                    <Star rating={2} movieId={this.props.movieId} />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Directors</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">
                    {this.joinnames(this.props.pmovie_data.Directors)}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Writers</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">
                    {this.joinnames(this.props.pmovie_data.Writers)}
                  </p>
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
    pmovie_data: state.movie.moviedata
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performgoDetail: movie_id => dispatch(actioncreators.goDetail(movie_id))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieDetail);
