import React, { Component } from "react";
import store from "../Stores.js";
import { increment, decrement } from "../Actions.js";

const buttonStyle = {
  margin: "20px"
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = this.getOwnState();
  }

  getOwnState = () => {
    return {
      value: store.getState()[this.props.caption]
    };
  };

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.subscribe(this.onChange);
  }

  onChange = () => {
    this.setState(this.getOwnState);
  };

  static defaultProps = {
    initValue: 0,
    onUpdate: f => f
  };

  handleIncrement = () => store.dispatch(increment(this.props.caption));

  handleDecrement = () => store.dispatch(decrement(this.props.caption));

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.handleIncrement}>
          +
        </button>
        <button style={buttonStyle} onClick={this.handleDecrement}>
          -
        </button>
        <span>
          {caption} count: {this.state.count}
        </span>
      </div>
    );
  }
}

export default Counter;
