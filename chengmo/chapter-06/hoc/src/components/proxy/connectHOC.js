import React, { Component } from "react";
import PropTypes from "prop-types";

const doNothing = () => ({});

function connect(mapStateToProps = doNothing, mapDispatchToProps = doNothing) {
  return WrappedComponent => {
    class HOCComponent extends Component {
      constructor(props) {
        super(props);
        this.store = {};
      }

      componentDidMount() {
        this.context.store.subscribe(this.onChange);
      }

      componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
      }

      onChange = () => {
        this.setState({});
      };

      render() {
        const store = this.context.store;
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState()),
          ...mapDispatchToProps(store.dispatch)
        };
        return <WrappedComponent {...newProps} />;
      }
    }

    HOCComponent.contextType = {
      store: PropTypes.object
    };

    return HOCComponent;
  };
}

return connect;
