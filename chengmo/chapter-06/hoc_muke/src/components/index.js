import React, { Component } from "react";
import Tabbar from "./tabbar";

const tabbarRapper = WrappedComponent => {
  return class Home extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
          <Tabbar />
        </div>
      );
    }
  };
};

export default tabbarRapper;
