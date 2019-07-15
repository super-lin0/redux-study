import React, { Component } from "react";

const buttonStyle = {
  margin: "20px"
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initValue || 0
    };
  }

  handleIncrement = () => this.updateCount(true);
  handleDecrement = () => this.updateCount(false);

  updateCount = flag => {
    const prevCount = this.state.count;
    const newValue = flag ? prevCount + 1 : prevCount - 1;
    this.setState({ count: newValue });
    this.props.onUpdate(newValue, prevCount);
  };

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
