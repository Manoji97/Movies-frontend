import React from "react";
import "materialize-css/dist/css/materialize.css";

const pagenumbers = (page_num, page_count) => {
  let pages = [1, 2, 3, 4, 5];
  if (page_num > 3) {
    pages = [];
    for (let count = page_num - 2; count <= page_num + 2; count++) {
      if (count < page_count) {
        pages.push(count);
      }
    }
  }
  return pages;
};

const Footer = props => {
  let pagination_list = [];
  let pagecount = Math.ceil(props.count / 10);
  let pagenumber = props.presentpage;
  let pages = pagenumbers(props.presentpage, pagecount);

  pagination_list = pages.map((number, index) => {
    let classes = number === props.presentpage ? "active" : "waves-effect";
    return (
      <li
        className={classes}
        key={number}
        onClick={e => props.onclick(e, number)}
      >
        <a href="#" className="white-text">
          {number}
        </a>
      </li>
    );
  });

  return (
    <footer className="center-align">
      <p className="white-text">
        {props.count} number of results.({pagecount} pages)
      </p>
      <ul className="pagination">
        <li
          className={pagenumber > 1 ? "waves-effect" : "disabled"}
          onClick={e => props.onclick(e, pagenumber - 1)}
        >
          <a href="#!">
            <i
              className={
                pagenumber > 1
                  ? "material-icons white-text"
                  : "material-icons grey-text"
              }
            >
              chevron_left
            </i>
          </a>
        </li>
        {pagination_list}
        <li
          className={pagenumber < pagecount ? "waves-effect" : "disabled"}
          onClick={e => props.onclick(e, pagenumber + 1)}
        >
          <a href="#!">
            <i
              className={
                pagenumber < pagecount
                  ? "material-icons white-text"
                  : "material-icons grey-text"
              }
            >
              chevron_right
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
