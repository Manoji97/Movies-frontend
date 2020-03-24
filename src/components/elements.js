import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

export const InputFiled = props => {
  let type = props.type === "password" ? "password" : "text";
  return (
    <div className="input-field col s12">
      <input
        value={props.value}
        id={props.id}
        type={type}
        className={`${props.valid} center-align`}
        placeholder={props.placeholder}
        onChange={e => props.onchange(e)}
      />
      <label className="active" htmlFor="first_name2">
        {props.label}
      </label>
    </div>
  );
};

export const InputField = props => {
  let isvalid = props.config.valid ? "valid" : "invalid";
  return (
    <div className="input-field col s12">
      <input
        value={props.config.value}
        id={props.config.id}
        type={props.config.type}
        className={`${isvalid} center-align`}
        placeholder={props.config.placeholder}
        onChange={e => props.onchange(e)}
      />
      <label className="active" htmlFor="">
        {props.config.label}
      </label>
      <span
        class="helper-text"
        data-error={props.config.errormessage}
        data-success=""
      ></span>
    </div>
  );
};

export const checkvalidity = (value, rules, password_for_confirm = "") => {
  let isvalid = true;
  let errormsg = "";
  for (let type in rules) {
    switch (type) {
      case "required":
        if (rules[type]) {
          isvalid &= value.trim() !== "";
        }
        errormsg = !isvalid ? "This Field is Requird" : "";
        break;
      case "minlength":
        isvalid &= value.length >= rules[type];
        errormsg = !isvalid ? `The Minimum length is ${rules[type]}` : "";
        break;
      case "confirm":
        isvalid &= value === password_for_confirm;
        errormsg = !isvalid ? "Your Passwords do not match" : "";
        break;
    }
  }
  return {
    isvalid: isvalid,
    errormessage: errormsg
  };
};

/*
export const ButtonField = props => {
  return (
    <div className="col s12">
      <a className="waves-effect waves-light btn-small">{props.value}</a>
    </div>
  );
};
*/

export class DropdownField extends Component {
  componentDidMount() {
    console.log("ele mounted");
    M.FormSelect.init(this.select, {});
    console.log(this.props.options);
  }
  componentDidUpdate() {
    console.log("ele upadted");
    console.log(this.props.options);
  }

  render() {
    let optlist = [
      <option key={0} value="" defaultValue>
        Choose your option
      </option>
    ];
    if (this.props.options) {
      this.props.options.map(item => {
        optlist.push(
          <option key={item.value} value={item.value}>
            {item.inner}
          </option>
        );
      });
    }

    return (
      <div className="input-field col s12">
        <select
          id={this.props.id}
          onChange={this.props.select}
          ref={select => {
            this.select = select;
          }}
        >
          {optlist}
        </select>
        <label>{this.props.label}</label>
      </div>
    );
  }
}
