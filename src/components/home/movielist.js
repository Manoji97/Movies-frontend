import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../moviecards";
import Footer from "./footer2";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

import queryString from "query-string";

import Spinner from "../spinner";

class MovieList extends Component {
  state = {
    pagenumber: this.props.p_statepage
  };

  componentDidMount() {
    if (this.props.location.search | (this.props.location.pathname === "/")) {
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
    if (params) {
      let len = Object.keys(params).length > 0;
      if (len) {
        if (len === 1) {
          if (params.page) {
            return {
              searchtype: "pagination",
              query: params.page
            };
          }
        }
        if (params.ms) {
          return {
            search_type: "mainsearch",
            query: {
              ms: params.ms,
              page: params.page ? params.page : ""
            }
          };
        }
        let search_params = {
          title: params.title ? params.title : "",
          rating: params.rating ? params.rating : "",
          year: params.year ? params.year : "",
          genre: params.genre ? params.genre : "",
          page: params.page ? params.page : ""
        };
        return {
          search_type: "search",
          query: search_params
        };
      }
    }
    return null;
  };

  handle_request = (e, num) => {
    e.preventDefault();
    this.setState({ pagenumber: num }, () => {
      this.props.history.push(
        this.props.p_searchurl + "&page=" + this.state.pagenumber
      );
      this.props.p_pagenum(num);
    });
  };

  render() {
    let Moviedata_list = this.props.pmoviedata_list;
    let Movies = Moviedata_list.results.map(item => {
      return (
        <div className="col s12 m6 l4 xl3" key={item.id}>
          <cards.MovieCard
            detail_link={"/" + item.id}
            image_link={item.Image_link}
            movie_name={item.Title}
            movie_rating={item.Rating}
          />
        </div>
      );
    });

    let MainList = (
      <React.Fragment>
        <div className="row">{Movies}</div>
        <Footer
          onclick={this.handle_request}
          count={Moviedata_list.count}
          presentpage={this.props.p_statepage}
        />
      </React.Fragment>
    );

    return (
      <section className="main">
        {this.props.p_isloading ? (
          <Spinner />
        ) : this.props.p_commonerror !== "" ? (
          <p>{this.props.p_commonerror}</p>
        ) : (
          MainList
        )}
      </section>
    );
  }
}

const mapstatetoprops = state => {
  return {
    pmoviedata_list: state.movie.datalist,
    p_searchurl: state.movie.searchstring,
    p_statepage: state.movie.pagenumber,
    p_isloading: state.movie.isLoading,
    p_commonerror: state.movie.commonerror
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    performLoad: searchParams =>
      dispatch(actioncreators.onSingleLoad(searchParams)),
    p_pagenum: num => dispatch(actioncreators.Pagenumone(num))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieList);
