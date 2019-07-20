import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ControlPanel from "./views/ControlPanel";
import Store from "./Stores";

import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <ControlPanel />
  </Provider>,
  document.getElementById("root")
);
