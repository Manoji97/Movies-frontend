import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as Elements from "../elements";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

import { Link } from "react-router-dom";

class UserTab extends Component {
  state = {
    username: {
      id: "username",
      type: "text",
      placeholder: "Enter User Name",
      label: "User Name",
      value: "",
      validity_rules: {
        required: true
      },
      valid: true,
      errormessage: "",
      eddited: false
    },
    password: {
      id: "password",
      placeholder: "Enter Password",
      label: "Password",
      type: "password",
      value: "",
      validity_rules: {
        required: true
      },
      valid: true,
      errormessage: "",
      eddited: false
    },
    message: ""
  };

  componentDidUpdate(prevprops) {
    if (
      (this.props.user_data.errormessage !== "") &
      (this.props.user_data.errormessage !== prevprops.user_data.errormessage)
    ) {
      this.setState({ message: this.props.user_data.errormessage });
    }
  }

  handler = e => {
    let validtity;
    switch (e.target.id) {
      case "username":
        validtity = Elements.checkvalidity(
          e.target.value,
          this.state.username.validity_rules
        );

        this.setState({
          username: {
            ...this.state.username,
            value: e.target.value,
            valid: validtity.isvalid,
            errormessage: validtity.errormessage,
            eddited: true
          }
        });
        break;
      case "password":
        validtity = Elements.checkvalidity(
          e.target.value,
          this.state.password.validity_rules
        );
        this.setState({
          password: {
            ...this.state.password,
            value: e.target.value,
            valid: validtity.isvalid,
            errormessage: validtity.errormessage,
            eddited: true
          }
        });
        break;
    }
  };

  Login = e => {
    e.preventDefault();

    if (
      this.state.username.valid &
      this.state.username.eddited &
      this.state.password.valid &
      this.state.password.eddited
    ) {
      this.props.performLogin({
        username: this.state.username.value,
        password: this.state.password.value
      });
      this.props.history.push("/");
    } else {
      this.setState({ message: "Fill all the Fields correctly" });
    }
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
          <Elements.InputField
            config={this.state.username}
            onchange={this.handler}
          />
        </div>
        <div className="col s12">
          <Elements.InputField
            config={this.state.password}
            onchange={this.handler}
          />
        </div>
        <p className="red-text">{this.state.message}</p>
        <div className="col s12 center-align">
          <input
            type="submit"
            id="search-btn"
            className="waves-effect waves-light btn white-text"
            value="Login"
          />
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

export default withRouter(
  connect(mapstatetoprops, mapdispatchtoprops)(UserTab)
);
