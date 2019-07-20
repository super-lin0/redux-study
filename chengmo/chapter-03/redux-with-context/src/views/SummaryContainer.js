import React, { Component } from "react";
import PropTypes from "prop-types";

import Summary from "./Summary";

class SummaryContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  static contextTypes = {
    store: PropTypes.object
  };

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = this.context.store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return <Summary sum={sum} />;
  }
}

export default SummaryContainer;
