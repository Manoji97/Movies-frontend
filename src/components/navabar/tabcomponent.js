import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as Elements from "../elements";

export class SearchTab extends Component {
  state = {
    search: {
      name: "",
      genre: "",
      year: "",
      rating: ""
    }
  };

  create_optionslist = (start, end) => {
    let optionlist = [];
    for (let i = start; i <= end; i++) {
      optionlist.push({ value: i, inner: i });
    }
    return optionlist;
  };
  genreslist = [
    {
      value: "Action",
      inner: "Action"
    },
    {
      value: "Adventure",
      inner: "Adventure"
    },
    {
      value: "Horror",
      inner: "Horror"
    }
  ];
  yearlist = this.create_optionslist(2000, new Date().getFullYear());
  ratinglist = this.create_optionslist(4, 9);

  name_handler = e => {
    this.setState({
      search: { ...this.state.search, name: e.target.value }
    });
  };

  select_handler = e => {
    switch (e.target.id) {
      case "genre":
        this.setState({
          search: { ...this.state.search, genre: e.target.value }
        });
        break;
      case "year":
        this.setState({
          search: { ...this.state.search, year: e.target.value }
        });
        break;
      case "rating":
        this.setState({
          search: { ...this.state.search, rating: e.target.value }
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <div className="col s12">
          <Elements.InputFiled
            placeholder="Enter Movie Name"
            label="Movie Name"
            onchange={this.name_handler}
          />
        </div>
        <div className="col s12">
          <Elements.DropdownField
            id="genre"
            label="Genres Select"
            options={this.genreslist}
            select={this.select_handler}
          />
        </div>
        <div className="col s12">
          <Elements.DropdownField
            id="year"
            label="year Select"
            options={this.yearlist}
            select={this.select_handler}
          />
        </div>
        <div className="col s12">
          <Elements.DropdownField
            id="rating"
            label="rating Select"
            options={this.ratinglist}
            select={this.select_handler}
          />
        </div>
        <div className="col s12 center-align">
          <a
            id="search-btn"
            className="waves-effect waves-light btn"
            onClick={() => console.log(this.state)}
          >
            <i className="material-icons right">search</i>Search
          </a>
        </div>
      </div>
    );
  }
}

export class UserTab extends Component {
  state = {
    user: {
      username: "",
      password: "",
      token: ""
    }
  };

  handler = (e) =>{
    switch (e.target.id){
      case "username":
        this.setState({
          user:{...this.state.user, username:e.target.value}
        })
        break;
      case "password":
        this.setState({
          user:{...this.state.user, password:e.target.value}
        })
        break;
    }
  }

  render() {
    return (
      <div id="user" className="row">
        <div id="login_form" className="row">
          <img
            id="userimage"
            className="materialboxed"
            width="200"
            height="200"
            src="sample-1.jpg"
          />
          <div className="col s12">
            <div className="col s12">
              <Elements.InputFiled
                id="username"
                placeholder="Enter User Name"
                label="User Name"
                onchange={this.handler}
              />
            </div>
            <div className="col s12">
              <Elements.InputFiled
                id="password"
                placeholder="Enter Password"
                label="Password"
                type="password"
                onchange={this.handler}
              />
            </div>
            <div className="col s12 center-align">
              <a
                id="search-btn"
                className="waves-effect waves-light btn"
                onClick={() => console.log(this.state)}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
