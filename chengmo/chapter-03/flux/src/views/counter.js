import React, { Component } from "react";
import CounterStore from "../stores/CounterStore";
import { increment, decrement } from "../Actions";

const buttonStyle = {
  margin: "20px"
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const count = CounterStore.getCounterValues()[this.props.caption];
    this.setState({ count });
  };

  static defaultProps = {
    initValue: 0,
    onUpdate: f => f
  };

  handleIncrement = () => increment(this.props.caption);

  handleDecrement = () => decrement(this.props.caption);

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
