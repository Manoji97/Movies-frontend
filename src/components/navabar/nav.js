import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import { Link } from "react-router-dom";

import Sidenav from "./sidenav";

class Nav extends Component {
  state = {
    scrolled: true
  };

  componentDidMount() {
    M.Sidenav.init(this.sidenav, {});
    document.addEventListener("scroll", () => {
      const scrolled = window.scrollY < 64;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled });
      }
    });
  }

  render() {
    const navcolour = {
      original: "transparent",
      later: "rgb(41, 41, 41, 0.97)"
    };

    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav
            style={{
              background: this.state.scrolled
                ? navcolour.original
                : navcolour.later
            }}
          >
            <div className="nav-wrapper">
              <div className="container">
                <a
                  href="#"
                  onClick={e => e.preventDefault()}
                  data-target="slide-out"
                  className="sidenav-trigger show-on-medium-and-up"
                >
                  <i className="acc material-icons">account_circle</i>
                </a>
                <Link to="/" className="brand-logo center">
                  Movies
                </Link>
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
