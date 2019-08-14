import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "@loadable/component";
import { Provider } from "react-redux";
import { combineReducers } from "redux";

import Header from "./layout";
import MyLoadingComponent from "./components/loading";
import store from "./Store.js";

const AsyncHome = Loadable(() => import("./pages/Home"), {
  fallback: MyLoadingComponent
});

const AsyncAbout = Loadable(() => import("./pages/About"));
const AsyncNotfound = Loadable(() => import("./pages/NotFound"));

const AsyncCounter = Loadable(() => {
  const { pages, reducer, stateKey, initialState } = import(
    "./pages/CounterPage"
  );
  const state = store.getState();
  store.reset(
    combineReducers({
      ...store._reducers,
      counter: reducer
    }),
    {
      ...state,
      [stateKey]: initialState
    }
  );

  return pages;
});

const RouterCfg = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        {/* 默认链接 */}
        <Route exact path="/" component={AsyncHome} />
        <Route exact path="/home" component={AsyncHome} />
        <Route exact path="/about" component={AsyncAbout} />
        <Route exact path="/counter" component={AsyncCounter} />
        <Route exact path="*" component={AsyncNotfound} />
      </Switch>
    </Router>
  </Provider>
);

export default RouterCfg;
