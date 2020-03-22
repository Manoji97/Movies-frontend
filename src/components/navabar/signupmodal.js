import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import * as Elements from "../elements";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

class SignUP extends Component {
  state = {
    username: {
      id: "newusername",
      type: "text",
      placeholder: "Enter User Name",
      label: "User Name",
      value: "",
      validity_rules: {
        required: true,
        minlength: 3
      },
      valid: true,
      errormessage: "",
      eddited: false
    },
    password: {
      id: "signuppassword",
      placeholder: "Enter Password",
      label: "Password",
      type: "password",
      value: "",
      validity_rules: {
        required: true,
        minlength: 4
      },
      valid: true,
      errormessage: "",
      eddited: false
    },
    confirmpassword: {
      id: "confirmpassword",
      placeholder: "Renter Password",
      label: "Confirm Password",
      type: "password",
      value: "",
      validity_rules: {
        confirm: true
      },
      valid: true,
      errormessage: "",
      eddited: false
    },
    message: ""
  };

  signupmodal = null;
  componentDidMount() {
    this.signupmodal = M.Modal.init(this.Modal, { dismissible: false });
  }
  componentDidUpdate(prevprops) {
    if (this.props.isOpen) this.signupmodal.open();
    else if (this.props.isOpen == false) this.signupmodal.close();
    if (
      prevprops.p_registeration.success !== this.props.p_registeration.success
    )
      this.setState({ message: "Successful!" });
    if (
      (this.props.p_registeration.usernameerror !== "") &
      (prevprops.p_registeration.usernameerror !==
        this.props.p_registeration.usernameerror)
    ) {
      this.setState({
        username: {
          ...this.state.username,
          errormessage: this.props.p_registeration.usernameerror,
          valid: false
        }
      });
    }
    if (
      (this.props.p_registeration.passworderror !== "") &
      (prevprops.p_registeration.passworderror !==
        this.props.p_registeration.errormessage)
    ) {
      this.setState({
        username: {
          ...this.state.password,
          errormessage: this.props.p_registeration.passworderror,
          valid: false
        }
      });
    }
  }

  handler = e => {
    e.preventDefault();
    let validtity;
    switch (e.target.id) {
      case "newusername":
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
      case "signuppassword":
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
      case "confirmpassword":
        validtity = Elements.checkvalidity(
          e.target.value,
          this.state.confirmpassword.validity_rules,
          this.state.password.value
        );
        this.setState({
          confirmpassword: {
            ...this.state.confirmpassword,
            value: e.target.value,
            valid: validtity.isvalid,
            errormessage: validtity.errormessage,
            eddited: true
          }
        });
        break;
    }
  };

  onRegister = e => {
    e.preventDefault();

    if (
      this.state.username.valid &
      this.state.username.eddited &
      this.state.password.valid &
      this.state.password.eddited &
      this.state.confirmpassword.valid &
      this.state.confirmpassword.eddited
    ) {
      this.props.performRegister({
        username: this.state.username.value,
        password: this.state.password.value
      });
    } else {
      this.setState({ message: "Fill all the Fields correctly" });
    }
  };
  onclose = e => {
    this.props.openModal(false);
  };

  render() {
    return (
      <form
        ref={Modal => {
          this.Modal = Modal;
        }}
        className="modal"
        onSubmit={e => this.onRegister(e)}
      >
        <div className="modal-content">
          <h5>SIGN UP</h5>
          <div className="col s12">
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
            <div className="col s12">
              <Elements.InputField
                config={this.state.confirmpassword}
                onchange={this.handler}
              />
            </div>
            <p className="blue-text">{this.state.message}</p>
          </div>
        </div>
        <div className="modal-footer">
          <input
            type="submit"
            className="waves-effect waves-blue btn blue register_btn"
            value="Register"
          />
          <Link
            className="modal-close waves-effect waves-red btn red"
            onClick={e => this.onclose(e)}
          >
            Close
          </Link>
        </div>
      </form>
    );
  }
}

const mapstatetoprops = state => {
  return {
    isOpen: state.user_info.isModalOpen,
    p_registeration: state.user_info.register
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    openModal: val => dispatch(actioncreators.performOpenModal(val)),
    performRegister: userdata =>
      dispatch(actioncreators.performRegister(userdata))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(SignUP);
