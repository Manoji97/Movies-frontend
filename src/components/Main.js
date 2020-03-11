import React, { Component } from "react";

import Nav from "./navabar/nav";
import Mainsearch from "./mainsearch/mainsearch";
import MovieList from "./home/movielist"

class Main extends Component {
  state = {
    mainsearch: ""
  };
  movielist = [1,2]

  onchangehandler(e) {
    this.setState({ mainsearch: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Mainsearch onchange={e => this.onchangehandler(e)} />
        <MovieList movielist={this.movielist}/>
      </React.Fragment>
    );
  }
}

export default Main;
