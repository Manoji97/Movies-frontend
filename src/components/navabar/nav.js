import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import { Link } from "react-router-dom";

import Sidenav from "./sidenav";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

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
    this.props.p_getGenreList();
  }

  clickLogo = () => {
    this.props.p_pagenum();
  };

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
                <Link
                  to="/"
                  onClick={this.clickLogo}
                  className="brand-logo center"
                >
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
          <h5>{this.props.pusername}</h5>
          <Sidenav />
        </div>
      </React.Fragment>
    );
  }
}

const mapstatetoprops = state => {
  return {
    pusername: state.user_info.user.username
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    p_pagenum: () => dispatch(actioncreators.Pagenumone()),
    p_getGenreList: () => dispatch(actioncreators.getGenreList())
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Nav);
