import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";

class Star extends Component {
  state = {
    edit: false,
    original: this.props.rating ? this.props.rating : 0,
    rating: this.props.rating ? this.props.rating : 0,
    temp_rating: 0
  };
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
    this.setState(pstate => ({ edit: !pstate.edit, rating: pstate.original }));
  };

  sendrating = () => {
    this.setState(pstate => ({ original: pstate.rating, edit: false }));
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
          className="material-icons right white-text"
          onClick={this.edithandler}
        >
          create
        </i>
      </div>
    );
  }
}

export default Star;
