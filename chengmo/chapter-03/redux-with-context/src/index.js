import React from "react";
import ReactDOM from "react-dom";

import ControlPanel from "./views/ControlPanel";
import Store from "./Stores";
import Provider from "./Provider";

import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <ControlPanel />
  </Provider>,
  document.getElementById("root")
);
