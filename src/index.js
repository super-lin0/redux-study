import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import reducers from "./reducers/reducers";
import App from "./containers/App";

const middleWare = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleWare.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(...middleWare));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
