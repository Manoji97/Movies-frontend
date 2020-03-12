import React from "react";
import "materialize-css/dist/css/materialize.css";

const Footer = props => {
  let Pagination_list = [];
  for( let count=1; count <= props.count; count ++){
    let classes = count === props.presentpage ? "active" : "waves-effect"
    Pagination_list.push(
      <li className={classes}>
          <a>{count}</a>
      </li>
    )
  }
  const disableclassfun = (link) =>{
    return (link === null) ? "disabled" : "waves-effect"
  }

  return (
    <footer className="center-align">
      <ul className="pagination">
        <li className={disableclassfun(props.links.previous)}>
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {Pagination_list}
        <li className={disableclassfun(props.links.next)}>
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;