import React, { Component } from "react";

class Counter extends Component {
  onIncrement = () => {
    const { onIncrement } = this.props;
    onIncrement();
  };

  onDecrement = () => {
    const { onDecrement } = this.props;
    onDecrement();
  };
  onIncrementOfOdd = () => {
    const { value, onIncrement } = this.props;

    if (value % 2 !== 0) {
      onIncrement();
    }
  };

  onIncrementOfAsycn = () => {
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
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrementOfOdd}>Increment of odd</button>
        <button onClick={this.onIncrementOfAsycn}>Increment of asycn</button>
      </div>
    );
  }
}

export default Counter;
