import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import { Link } from "react-router-dom";
import SearchTab from "./searchtab";
import UserTab from "./usertab";

class Sidenav extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }
  render() {
    return (
      <ul>
        <div className="row Search">
          <div className="col s12">
            <ul
              className="tabs"
              ref={Tabs => {
                this.Tabs = Tabs;
              }}
            >
              <li className="tab col s6">
                <a href="#search">Search</a>
              </li>
              <li className="tab col s6">
                <a href="#user" className="active">
                  User
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="search" className="row">
          <SearchTab />
        </div>

        <div id="user" className="row">
          <UserTab />
        </div>
      </ul>
    );
  }
}

export default Sidenav;
