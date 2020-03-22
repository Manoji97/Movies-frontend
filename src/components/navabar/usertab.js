import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as Elements from "../elements";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

import { Link } from "react-router-dom";

class UserTab extends Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  };

  handler = e => {
    switch (e.target.id) {
      case "username":
        this.setState({
          user: { ...this.state.user, username: e.target.value }
        });
        break;
      case "password":
        this.setState({
          user: { ...this.state.user, password: e.target.value }
        });
        break;
    }
  };

  Login = e => {
    e.preventDefault();
    this.props.performLogin(this.state);
  };

  render() {
    let user_image = (
      <div className="row">
        <img
          id="userimage"
          className="materialboxed"
          width="200"
          height="200"
          src="sample-1.jpg"
        />
        <div className="col s12 center-align">
          <Link
            id="search-btn"
            className="waves-effect waves-light btn"
            onClick={() => this.props.performLogout()}
          >
            Logout
          </Link>
        </div>
      </div>
    );
    let input_fields = (
      <form className="col s12" onSubmit={e => this.Login(e)}>
        <div className="col s12">
          <Elements.InputFiled
            id="username"
            placeholder="Enter User Name"
            label="User Name"
            isvalid={true}
            onchange={this.handler}
          />
        </div>
        <div className="col s12">
          <Elements.InputFiled
            id="password"
            placeholder="Enter Password"
            label="Password"
            type="password"
            isvalid={true}
            onchange={this.handler}
          />
        </div>
        <div className="col s12 center-align">
          <a
            id="search-btn"
            className="waves-effect waves-light btn"
            //onClick={() => this.props.performLogin(this.state.user)}
          >
            Login
          </a>
        </div>
        <div className="col s12 center-align signup">
          <a
            id="search-btn"
            className="waves-effect waves-light btn"
            onClick={e => {
              e.preventDefault();
              this.props.openModal(true);
            }}
          >
            SignUP
          </a>
        </div>
      </form>
    );
    return (
      <div id="user" className="row">
        <div id="login_form" className="row">
          {this.props.user_data.isLoggedin ? user_image : input_fields}
        </div>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    user_data: state.user_info.user
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performLogin: user_info => dispatch(actioncreators.doLogin(user_info)),
    performLogout: () => dispatch(actioncreators.doLogout()),
    openModal: val => dispatch(actioncreators.performOpenModal(val))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(UserTab);
