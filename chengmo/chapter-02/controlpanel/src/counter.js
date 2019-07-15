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

  handleIncrement = () => this.setState({ count: this.state.count + 1 });
  handleDecrement = () => this.setState({ count: this.state.count - 1 });

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
