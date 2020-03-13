import React, { Component } from "react";
import "./styles.css";
import Main from "./components/Main";

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import ScrollToTop from "./components/scrollup";

import reducer from "./store/reducers/reducer";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Main />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
}
