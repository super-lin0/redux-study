import React, { Component } from "react";
import Layout from "./layout";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Router />
      </div>
    );
  }
}

export default App;
