import React, { Component } from "react";

import Nav from "./navabar/nav";
import Mainsearch from "./mainsearch/mainsearch";
import MovieList from "./home/movielist";
import Detail from "./detail/detail";

import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Mainsearch />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
