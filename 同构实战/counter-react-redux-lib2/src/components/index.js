import React, { Component } from "react";

import ButtonAct from "./button.js";

class Counter extends Component {
  incrementHandle = () => {
    const { onIncrement } = this.props;
    onIncrement();
  };

  decrementHandle = () => {
    const { onDecrement } = this.props;
    onDecrement();
  };
  incrementOfOddHandle = () => {
    const { value, onIncrement } = this.props;

    if (value % 2 !== 0) {
      onIncrement();
    }
  };

  incrementOfAsycnHandle = () => {
    const { onIncrement } = this.props;

    setTimeout(() => {
      onIncrement();
    }, 1000);
  };

  render() {
    const { value } = this.props;
    return (
      <div>
        Clicked <span>{value}</span> times
        <ButtonAct onClick={this.incrementHandle} text="+" />
        <ButtonAct onClick={this.decrementHandle} text="-" />
        <ButtonAct
          onClick={this.incrementOfOddHandle}
          text="Increment of odd"
        />
        <ButtonAct
          onClick={this.incrementOfAsycnHandle}
          text="Increment of asycn"
        />
      </div>
    );
  }
}
export default Counter;
