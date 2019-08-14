import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
// import App from "./App";

import Router from "./Router.js";
import Store from "./Store";

ReactDOM.render(
  <Provider store={Store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
