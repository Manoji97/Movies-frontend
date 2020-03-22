import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import * as Elements from "../elements";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

class SignUP extends Component {
  state = {
    open: false,
    username: "",
    password: "",
    confirmpassword: "",
    message: ""
  };
  signupmodal = null;
  componentDidMount() {
    this.signupmodal = M.Modal.init(this.Modal, { dismissible: false });
  }
  componentDidUpdate() {
    if (this.props.isOpen) this.signupmodal.open();
    else if (this.props.isOpen == false) this.signupmodal.close();
  }

  handler = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "newusername":
        this.setState({ username: e.target.value });
        break;
      case "signuppassword":
        this.setState({ password: e.target.value });
        break;
      case "confirmpassword":
        this.setState({ confirmpassword: e.target.value });
        break;
    }
  };

  onRegister = e => {
    if (this.state.password !== this.state.confirmpassword) {
      this.setState({ message: "Your Passwords dont match" });
    } else {
      console.log("post data");
    }
  };
  onclose = e => {
    this.props.openModal(false);
  };

  render() {
    return (
      <div
        ref={Modal => {
          this.Modal = Modal;
        }}
        className="modal"
      >
        <div className="modal-content">
          <h5>SIGN UP</h5>
          <div className="col s12">
            <div className="col s12">
              <Elements.InputFiled
                id="newusername"
                placeholder="Enter User Name"
                label="User Name"
                onchange={this.handler}
              />
            </div>
            <div className="col s12">
              <Elements.InputFiled
                id="signuppassword"
                placeholder="Enter Password"
                label="Password"
                type="password"
                onchange={this.handler}
              />
            </div>
            <div className="col s12">
              <Elements.InputFiled
                id="confirmpassword"
                placeholder="Renter Password"
                label="Confirm Password"
                type="password"
                onchange={this.handler}
              />
            </div>
            <p className="blue-text">{this.state.message}</p>
          </div>
        </div>
        <div className="modal-footer">
          <Link
            className="waves-effect waves-blue btn blue register_btn"
            onClick={e => this.onRegister(e)}
          >
            Register
          </Link>
          <Link
            className="modal-close waves-effect waves-red btn red"
            onClick={e => this.onclose(e)}
          >
            Close
          </Link>
        </div>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    isOpen: state.user_info.isModalOpen
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    openModal: val => dispatch(actioncreators.performOpenModal(val))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(SignUP);
