import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import Sidenav from "./sidenav";

class Nav extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav, {});
  }
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <div className="container">
                <a
                  href="#"
                  data-target="slide-out"
                  className="sidenav-trigger show-on-medium-and-up"
                >
                  <i className="acc material-icons">account_circle</i>
                </a>
                <a href="#" className="brand-logo center">
                  Movies
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div
          id="slide-out"
          className="sidenav"
          ref={sidenav => (this.sidenav = sidenav)}
        >
          <Sidenav />
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
