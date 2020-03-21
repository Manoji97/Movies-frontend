import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import * as Elements from "../elements";

class SignUP extends Component {
  state = {
    open: false
  };
  signupmodal = null;
  componentDidMount() {
    this.signupmodal = M.Modal.init(this.Modal, {});
    console.log(this.props.isOpen);
    if (this.props.isOpen) {
      this.signupmodal.open();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) this.signupmodal.open();
    }
  }
  render() {
    return (
      <div
        ref={Modal => {
          this.Modal = Modal;
        }}
        className="modal"
      >
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Agree
          </a>
        </div>
      </div>
    );
  }
}

export default SignUP;
