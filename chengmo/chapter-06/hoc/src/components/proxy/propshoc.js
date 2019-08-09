import React, { Component } from "react";

function removeUserProp(WrappedComponent) {
  return class WrappingComponent extends Component {
    render() {
      const { user, ...otherProps } = this.props;
      return <WrappedComponent {...otherProps} />;
    }
  };
}

const removeUserProp1 = WrappedComponent => props => {
  const { user, ...otherProps } = props;
  return <WrappedComponent {...otherProps} />;
};

const addUserProps = WrappedComponent => props => newProps => (
  <WrappedComponent {...props} {...newProps} />
);

// addUserProps(A)(this.props)({ username: "zbc" });

export default removeUserProp;
