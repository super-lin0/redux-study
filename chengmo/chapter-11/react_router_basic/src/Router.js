import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./layout";

const RouterCfg = () => (
  <Router>
    <Header />
    <Switch>
      {/* 默认链接 */}
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default RouterCfg;
