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
        className="validate center-align"
        placeholder={props.placeholder}
        onChange={e => props.onchange(e)}
      />
      <label className="active" htmlFor="first_name2">
        {props.label}
      </label>
    </div>
  );
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
    M.FormSelect.init(this.select, {});
  }

  render() {
    let optlist = [
      <option key={0} value="" defaultValue>
        Choose your option
      </option>
    ];

    this.props.options.map(item => {
      optlist.push(
        <option key={item.value} value={item.value}>
          {item.inner}
        </option>
      );
    });

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
