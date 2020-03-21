import React, { Component } from "react";

import Nav from "./navabar/nav";
import Mainsearch from "./mainsearch/mainsearch";
import MovieList from "./home/movielist";
import Detail from "./detail/detail";
import SignUP from "./navabar/signupmodal";

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
        <SignUP isOpen={this.props.p_ismodalopen} />
        <Mainsearch />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_ismodalopen: state.isModalOpen
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performonHomeLoad: () => dispatch(actioncreators.onSingleLoad())
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Main);
