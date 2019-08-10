import React, { Component } from "react";
const style = {
  width: 100,
  height: 100,
  border: "1px solid red"
};

const A = WrappedComponent =>
  class A extends Component {
    render() {
      return (
        <div style={style}>
          <WrappedComponent />
        </div>
      );
    }
  };

export default A;
