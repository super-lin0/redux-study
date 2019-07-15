import React, { Component } from "react";

const isEmpty = prop =>
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty("length") && prop.length === 0) ||
  (prop.contructor === Object && Object.keys(prop).length === 0);

const withLoadingHoc = loadingProps => WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      this.startTimer = new Date();
    }
    componentWillUpdate(nextProps) {
      if (!isEmpty(nextProps[loadingProps])) {
        this.endStartTime = new Date();
      }
    }
    render() {
      const isEmptyStatus = isEmpty(this.props[loadingProps]);
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };
      return isEmptyStatus ? (
        <div className="loader">loading.....</div>
      ) : (
        <WrappedComponent {...this.props} {...myProps} />
      );
    }
  };
};

export default withLoadingHoc;
