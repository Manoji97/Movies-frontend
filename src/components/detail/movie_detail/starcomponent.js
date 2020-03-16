import React, { Component } from "react";
import "materialize-css/dist/css/materialize.css";
import styled from "styled-components";

const ii = styled.i`
  cursor: pointer;
  padding: 5px;
`;

class Star extends Component {
  state = {
    edit: false,
    rating: 0,
    temp_rating: 0
  };
  componentDidMount() {
    this.setState({ rating: this.props.rating });
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

  render() {
    let stars = [];
    let classes = "material-icons left ";
    for (let i = 1; i <= 5; i++) {
      classes +=
        (i <= this.state.rating) | (i <= this.state.temp_rating)
          ? "yellow-text"
          : "grey-text";
      stars.push(
        <ii
          className={classes}
          key={i}
          onClick={this.state.edit ? () => this.onclick(i) : null}
          onMouseOver={this.state.edit ? () => this.onmouseover(i) : null}
          onMouseOut={this.state.edit ? this.onmouseout : null}
        >
          star
        </ii>
      );
      classes = "material-icons left ";
    }

    return (
      <React.Fragment>
        <ii
          className="material-icons right white-text"
          onClick={() => this.setState({ edit: true })}
        >
          create
        </ii>
        {stars}
      </React.Fragment>
    );
  }
}

export default Star;
