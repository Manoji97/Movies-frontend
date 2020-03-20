import React from "react";
import "materialize-css/dist/css/materialize.css";

const StaticStar = props => {
  let rating = Math.ceil(props.rating / 2);
  let stars = [];
  let classes = "material-icons ";
  for (let i = 1; i <= 5; i++) {
    classes += i <= rating ? "yellow-text" : "grey-text";
    stars.push(
      <i className={classes} key={i}>
        star
      </i>
    );
    classes = "material-icons ";
  }

  return <div className="star">{stars}</div>;
};

export default StaticStar;
