import React, { Component } from "react";

import Nav from "./navabar/nav";
import Mainsearch from "./mainsearch/mainsearch";
import MovieList from "./home/movielist"
import Detail from "./detail/detail"

class Main extends Component {
  state = {
    mainsearch: ""
  };


  onchangehandler(e) {
    this.setState({ mainsearch: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Mainsearch onchange={e => this.onchangehandler(e)} />
        <MovieList />
        {/*<Detail />*/}
      </React.Fragment>
    );
  }
}

export default Main;
