import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import styled from "styled-components";

class Star extends Component {
  state = {
    edit: false,
    original: this.props.rating,
    rating: 0,
    temp_rating: 0
  };
  componentDidMount() {
    this.setState({ rating: this.state.original });
    console.log("m");
  }

  onclick = i => {
    this.setState({ rating: i });
  };
  onmouseover = i => {
    this.setState({ temp_rating: i });
  };
  onmouseout = () => {
    this.setState({ temp_rating: 0 });
  };
  posturrating = () => {
    // code for posting the rating to db
    this.setState(this.setState({ original: this.state.rating }));
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
          onClick={this.state.edit ? () => this.onclick(i) : null}
          onMouseOver={this.state.edit ? () => this.onmouseover(i) : null}
          onMouseOut={this.state.edit ? this.onmouseout : null}
        >
          star
        </i>
      );
      classes = "material-icons ";
    }
    let check = (
      <i className="material-icons c teal-text" onClick={this.posturrating}>
        check
      </i>
    );

    return (
      <div className="star">
        {stars}
        {this.state.edit ? check : null}
        <i
          className="material-icons right white-text"
          onClick={pstate => {
            this.setState({ edit: !this.state.edit, rating: pstate.original });
            console.log(this.state);
          }}
        >
          create
        </i>
      </div>
    );
  }
}

export default Star;
