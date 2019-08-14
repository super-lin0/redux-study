import React, { Component } from "react";
import Loadable from "@loadable/component";

const loabdableWrapper = (name, data) => {
  const AsyncPage = Loadable(() => import(`./pages/${name}`));

  return class loadableHOC extends Component {
    render() {
      return <AsyncPage {...data} />;
    }
  };
};

export default loabdableWrapper;
