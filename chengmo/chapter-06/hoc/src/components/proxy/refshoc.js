import React, { Component } from "react";

const refsHoc = WrappedComponent => {
  return class reshoc extends Component {
    linkRef = ref => (this._root = ref);
    render() {
      const props = { ...this.props, ref: this.linkRef };
      return <WrappedComponent {...props} />;
    }
  };
};

export default refsHoc;
