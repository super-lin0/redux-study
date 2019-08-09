import React, { Component } from "react";
import A from "./A";

class B extends Component {
  render() {
    return <div>I'm from B</div>;
  }
}

export default A(B);
