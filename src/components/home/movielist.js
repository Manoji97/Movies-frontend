import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

import * as cards from "../moviecards";
import Footer from "./footer";

import { Link } from "react-router-dom";

import * as actioncreators from "../../store/actions/actioncreators";
import { connect } from "react-redux";

class MovieList extends Component {
  state = {
    pagenumber: 1
  };

  componentDidMount() {
    this.props.performonHomeLoad();
  }

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
    performonHomeLoad: () => dispatch(actioncreators.onHomeLoad())
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(MovieList);
