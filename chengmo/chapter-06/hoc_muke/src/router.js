import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, Cart, Category, User } from "./pages";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/user" component={User} />
    </Switch>
  </BrowserRouter>
);
