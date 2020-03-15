import React from "react";
import "materialize-css/dist/css/materialize.css";

const Footer = props => {
  let Pagination_list = [];
  for (let count = 1; count <= 3; count++) {
    let classes = count === props.presentpage ? "active" : "waves-effect";
    Pagination_list.push(
      <li className={classes}>
        <a className="white-text">{count}</a>
      </li>
    );
  }
  const disableclassfun = (link, element) => {
    switch (element) {
      case "li":
        return link === null ? "disabled" : "waves-effect";
        break;
      case "i":
        return link === null
          ? "material-icons grey-text"
          : "material-icons white-text";
        break;
    }
  };

  return (
    <footer className="center-align">
      <ul className="pagination">
        <li className={disableclassfun(props.links.previous, "li")}>
          <a href="#!">
            <i className={disableclassfun(props.links.previous, "i")}>
              chevron_left
            </i>
          </a>
        </li>
        {Pagination_list}
        <li className={disableclassfun(props.links.next, "li")}>
          <a href="#!">
            <i className={disableclassfun(props.links.next, "i")}>
              chevron_right
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
