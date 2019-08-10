import React, { Component } from "react";
import wrapper from "./A";

@wrapper
class B extends Component {
  render() {
    return <div>Hello, I'm from B</div>;
  }
}

export default B;
