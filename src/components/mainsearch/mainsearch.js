import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import { connect } from "react-redux";

import * as actioncreators from "../../store/actions/actioncreators";

class MainSearch extends Component {
  state = {
    mainsearch: ""
  };

  onchange_handler = e => {
    this.setState({ mainsearch: e.target.value });
  };

  handle_enter = e => {
    if (e.key === "Enter") {
      this.props.performMainsearch(this.state.mainsearch);
    }
  };

  render() {
    return (
      <section className="main-search">
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input
              placeholder="Enter Search Text"
              type="text"
              className="validate center-align"
              onChange={e => this.onchange_handler(e)}
              onKeyDown={e => this.handle_enter(e)}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_mainsearch: state.mainsearch
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performMainsearch: val => dispatch(actioncreators.doMainsearch(val))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MainSearch);
