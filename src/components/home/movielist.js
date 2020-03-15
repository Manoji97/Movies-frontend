import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../moviecards";
import Footer from "./footer";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actioncreators";

class MovieList extends Component {
  state = {
    pagenumber: 1
  };

  handle_request = num => {
    if ((num !== this.state.pagenumber) & (num >= 1)) {
      this.setState({ pagenumber: num });
      this.props.performtopage(num);
    }
  };

  render() {
    let Moviedata_list = this.props.pmoviedata_list;
    let Movies = Moviedata_list.results.map(item => {
      return (
        <div className="col s12 m6 l4 xl3">
          <Link to={"/" + item.id} key={item.id}>
            <cards.MovieCard
              image_link={item.Image_link}
              movie_name={item.Title}
              movie_rating={item.Rating}
            />
          </Link>
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
    performtopage: page_num => dispatch(actioncreators.onHomeLoad(page_num))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieList);
