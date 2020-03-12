import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

class MovieDetail extends Component {
  movie = {
    title: "Interstellar 2014",
    img_link: "https://www.movienewsletters.net/photos/156876R1.jpg",
    language: "English, spanish, tamil, german",
    genres: "action, adventure, horror, thriller",
    rating: "4/5",
    number_of_users: "63521",
    your_rating: "4/5",
    directors: "Nolan, cameron, shankar, murugadas, ks ravikumar"
  };
  render() {
    return (
      <section className="mian">
        <div className="movie-detail row">
          <div className="col s12 m5 l4">
            <div className="image">
              <img src={this.movie.img_link} alt="" />
            </div>
          </div>
          <div className="col s12 m7 l8">
            <div className="content">
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Title</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.title}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Language</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.language}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Genres</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.genres}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.rating}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">No of users rated</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.number_of_users}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">your Rating</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.your_rating}</p>
                </div>
              </div>
              <div className="row">
                <div className="col m6 l4">
                  <p className="key">Directors</p>
                </div>
                <div className="col m6 l8">
                  <p className="value">{this.movie.directors}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetail;
