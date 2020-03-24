import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css";

import { connect } from "react-redux";
import * as actioncreators from "../../../store/actions/actioncreators";

class Star extends Component {
  state = {
    edit: false,
    original: this.props.rating ? this.props.rating : 0,
    rating: this.props.rating ? this.props.rating : 0,
    temp_rating: 0
  };

  componentDidUpdate() {
    if (!this.props.p_isloggedin) {
      if (this.state.edit) this.setState({ edit: false });
    }
  }
  onclick = num => {
    if (this.state.edit) {
      this.setState({ rating: num });
    }
  };
  onmouseover = num => {
    if (this.state.edit) {
      this.setState({ temp_rating: num });
    }
  };
  onmouseout = num => {
    if (this.state.edit) {
      this.setState({ temp_rating: num });
    }
  };

  edithandler = () => {
    if (this.props.p_isloggedin) {
      this.setState(pstate => ({
        edit: !pstate.edit,
        rating: pstate.original
      }));
    } else {
      M.toast({ html: "You have to Loggin to add Rating" });
    }
  };

  sendrating = () => {
    this.setState(
      pstate => ({ original: pstate.rating, edit: false }),
      () => {
        this.props.update_userrating(this.props.movieId, this.props.p_token, {
          newRate: this.state.original
        });
      }
    );
  };

  render() {
    let stars = [];
    let classes = "material-icons ";
    for (let i = 1; i <= 5; i++) {
      classes +=
        (i <= this.state.rating) | (i <= this.state.temp_rating)
          ? "yellow-text"
          : "grey-text";
      stars.push(
        <i
          className={classes}
          key={i}
          onClick={() => this.onclick(i)}
          onMouseOver={() => this.onmouseover(i)}
          onMouseOut={this.onmouseout}
        >
          star
        </i>
      );
      classes = "material-icons ";
    }
    let check = (
      <i className="material-icons c teal-text" onClick={this.sendrating}>
        check
      </i>
    );

    return (
      <div className="star">
        {stars}
        {this.state.edit ? check : null}
        <i
          className="material-icons right yellow-text tooltipped"
          data-position="top"
          data-tooltip="You have to Loggin to add Rating"
          onClick={this.edithandler}
        >
          create
        </i>
        <p className="white-text">{this.props.p_message}</p>
      </div>
    );
  }
}

const mapstatetoprops = state => {
  return {
    p_isloggedin: state.user_info.user.isLoggedin,
    p_token: state.user_info.user.token,
    p_message: state.movie.movieratingmessage
  };
};

const mapdispatchtoprops = dispatch => {
  return {
    update_userrating: (movieId, p_token, newRate) =>
      dispatch(actioncreators.updateRating(movieId, p_token, newRate))
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Star);
