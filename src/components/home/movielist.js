import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../moviecards";
import Footer from "./footer";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

import queryString from "query-string";

class MovieList extends Component {
  state = {
    pagenumber: 1
  };

  componentDidMount() {
    if (this.props.location.search) {
      let searchParams = queryString.parse(this.props.location.search);
      this.props.performLoad(this.get_searchparam(searchParams));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      let searchParams = queryString.parse(this.props.location.search);
      this.props.performLoad(this.get_searchparam(searchParams));
    }
  }

  get_searchparam = params => {
    if (Object.keys(params).length > 0) {
      if (params.ms) {
        return {
          search_type: "mainsearch",
          query: params.ms
        };
      }
      let search_params = {
        title: params.title ? params.title : "",
        rating: params.rating ? params.rating : "",
        year: params.year ? params.year : "",
        genre: params.genre ? params.genre : ""
      };
      return {
        search_type: "search",
        query: search_params
      };
    }
    return null;
  };

  handle_request = (e, num) => {
    e.preventDefault();
    if (num >= 1) {
      if (num > this.state.pagenumber) {
        this.setState({ pagenumber: this.state.pagenumber + 1 });
        this.props.performtopage(this.props.pmoviedata_list.next);
      }
      if (num > this.state.pagenumber) {
        this.setState({ pagenumber: this.state.pagenumber - 1 });
        this.props.performtopage(this.props.pmoviedata_list.previous);
      }
    }
  };

  render() {
    let Moviedata_list = this.props.pmoviedata_list;
    let Movies = Moviedata_list.results.map(item => {
      return (
        <div className="col s12 m6 l4 xl3">
          <cards.MovieCard
            key={item.id}
            detail_link={"/" + item.id}
            image_link={item.Image_link}
            movie_name={item.Title}
            movie_rating={item.Rating}
          />
        </div>
      );
    });
    return (
      <section className="main">
        <div className="row">{Movies}</div>
        <Footer
          onclick={this.handle_request}
          count={Moviedata_list.count}
          presentpage={this.state.pagenumber}
          links={{
            next: Moviedata_list.next,
            previous: Moviedata_list.previous
          }}
        />
      </section>
    );
  }
}

const mapstatetoprops = state => {
  return {
    pmoviedata_list: state.datalist
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performLoad: searchParams =>
      dispatch(actioncreators.onSingleLoad(null, searchParams))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieList);
