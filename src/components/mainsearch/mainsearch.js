import React from "react";
import "materialize-css/dist/css/materialize.css";

const MainSearch = (props) => {
  return (
    <section className="main-search">
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">search</i>
          <input
            placeholder="Enter Search Text"
            type="text"
            className="validate center-align"
            onChange={e => props.onchange(e)}
          />
        </div>
      </div>
    </section>
  );
}

export default MainSearch;