import React, { Component } from "react";

import Nav from "./navabar/nav";
import Mainsearch from "./mainsearch/mainsearch";
import MovieList from "./home/movielist";
import Detail from "./detail/detail";

import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../store/actions/actioncreators";

class Main extends Component {
  componentDidMount() {
    this.props.performonHomeLoad();
  }

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

const mapdispatchtoprops = dispatch => {
  return {
    performonHomeLoad: () => dispatch(actioncreators.onHomeLoad())
  };
};

export default connect(null, mapdispatchtoprops)(Main);
