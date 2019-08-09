import React, { Component } from "react";

function WrappedA(WrappedComponent) {
  return class A extends Component {
    render() {
      return (
        <div>
          Hello rowld
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default WrappedA;
