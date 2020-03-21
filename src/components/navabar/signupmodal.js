import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import * as Elements from "../elements";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

const Modaloverlay = props => {
  return (
    <div className="modal-overlay" onClick={() => props.onoverlay()}></div>
  );
};

class SignUP extends Component {
  state = {
    open: false,
    username: "",
    password: "",
    confirmpassword: ""
  };
  signupmodal = null;
  componentDidMount() {
    this.signupmodal = M.Modal.init(this.Modal, {});
  }
  componentDidUpdate() {
    if (this.props.isOpen) this.signupmodal.open();
    else this.signupmodal.close();
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

  onRegister = () => {
    console.log(this.state);
  };
  onclose = e => {
    e.preventDefault();
    this.props.openModal(false);
  };

  render() {
    console.log(this.props.isOpen);
    return (
      <React.Fragment>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          className="modal"
        >
          <div className="modal-content">
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
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-blue btn blue"
              onClick={this.onRegister}
            >
              Register
            </a>
            <a
              href="#!"
              className="modal-close waves-effect waves-red btn red"
              onClick={this.onclose}
            >
              Close
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapdispatchtoprops = dispatch => {
  return {
    openModal: val => dispatch(actioncreators.performOpenModal(val))
  };
};

export default connect(null, mapdispatchtoprops)(SignUP);
