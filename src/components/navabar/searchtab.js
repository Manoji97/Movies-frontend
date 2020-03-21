import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as Elements from "../elements";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

class SearchTab extends Component {
  state = {
    search: {
      title: "",
      genre: "",
      year: "",
      rating: ""
    },
    genreslist: []
  };

  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.p_genrelist !== this.props.p_genrelist) {
      this.setState({
        genreslist: this.create_genrelist(this.props.p_genrelist)
      });
    }
  }

  create_optionslist = (start, end) => {
    let optionlist = [];
    for (let i = end; i >= start; i--) {
      optionlist.push({ value: i, inner: i });
    }
    return optionlist;
  };

  create_genrelist = genrelist => {
    let newgenrelist = [];
    if (genrelist.length > 0) {
      genrelist.map(item => {
        newgenrelist.push({
          value: item.genre,
          inner: item.genre
        });
      });
    }
    return newgenrelist;
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
      search: { ...this.state.search, title: e.target.value }
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

  search_handler = e => {
    e.preventDefault();
    let q_string =
      this.state.search.title !== "" ? "title=" + this.state.search.title : "";
    q_string +=
      this.state.search.genre !== "" ? "&genre=" + this.state.search.genre : "";
    q_string +=
      this.state.search.year !== "" ? "&year=" + this.state.search.year : "";
    q_string +=
      this.state.search.rating !== ""
        ? "&rating=" + this.state.search.rating
        : "";
    this.props.history.push("/?" + q_string);
    this.props.p_pagenum();
    this.props.p_startloading();
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
            onClick={e => {
              this.search_handler(e);
            }}
          >
            <i className="material-icons right">search</i>Search
          </a>
        </div>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_genrelist: state.genrelist
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    p_pagenum: () => dispatch(actioncreators.Pagenumone()),
    p_startloading: () => dispatch(actioncreators.pageloading())
  };
};

export default withRouter(
  connect(mapstatetoprops, mapdispatchtoprops)(SearchTab)
);
