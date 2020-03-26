import React from "react";
import "./styles.css";
import Main from "./components/Main";

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import ScrollToTop from "./components/scrollup";

import Moviereducer from "./store/reducers/moviereducer";
import Userreducer from "./store/reducers/userreducer";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootreducer = combineReducers({
  movie: Moviereducer,
  user_info: Userreducer
});

const store = createStore(rootreducer, enhancer);

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
