import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MainSearch extends Component {
  state = {
    mainsearch: ""
  };

  onchange_handler = e => {
    this.setState({ mainsearch: e.target.value });
  };

  handle_enter = e => {
    if (e.key === "Enter") {
      if (this.state.mainsearch.length > 1) {
        this.props.history.push("/?ms=" + this.state.mainsearch);
      } else {
        this.props.history.push("/");
      }
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

const mapdispatchtoprops = dispatch => {
  return {
    addsearchstring: searchurl =>
      dispatch(actioncreators.addSearchUrl(searchurl))
  };
};

export default withRouter(connect(null, mapdispatchtoprops)(MainSearch));
