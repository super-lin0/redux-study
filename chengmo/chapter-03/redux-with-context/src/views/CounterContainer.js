import React, { Component } from "react";
import PropTypes from "prop-types";

import { increment, decrement } from "../Actions.js";
import Counter from "./Counter";

class CounterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.getOwnState();
    this.context = context;
  }

  static contextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    caption: PropTypes.string.isRequired
  };

  getOwnState = () => {
    return {
      value: this.context.store.getState()[this.props.caption]
    };
  };

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  onChange = () => {
    this.setState(this.getOwnState);
  };

  static defaultProps = {
    initValue: 0,
    onUpdate: f => f
  };

  handleIncrement = () =>
    this.context.store.dispatch(increment(this.props.caption));

  handleDecrement = () =>
    this.context.store.dispatch(decrement(this.props.caption));

  render() {
    const { caption } = this.props;
    const { count } = this.state;
    const opt = {
      caption,
      count,
      handleDecrement: this.handleDecrement,
      handleIncrement: this.handleIncrement
    };
    return <Counter {...opt} />;
  }
}

export default CounterContainer;
