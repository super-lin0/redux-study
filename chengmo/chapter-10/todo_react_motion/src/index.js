import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import TodoApp from "./TodoApp";
import Store from "./Store";

ReactDOM.render(
  <Provider store={Store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
