import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "@loadable/component";

import Header from "./layout";
import MyLoadingComponent from "./components/loading";

const AsyncHome = Loadable(() => import("./pages/Home"), {
  fallback: MyLoadingComponent
});

const AsyncAbout = Loadable(() => import("./pages/About"));
const AsyncNotfound = Loadable(() => import("./pages/NotFound"));

const RouterCfg = () => (
  <Router>
    <Header />
    <Switch>
      {/* 默认链接 */}
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/home" component={AsyncHome} />
      <Route exact path="/about" component={AsyncAbout} />
      <Route exact path="*" component={AsyncNotfound} />
    </Switch>
  </Router>
);

export default RouterCfg;
