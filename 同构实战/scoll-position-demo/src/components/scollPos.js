import React, { Component } from "react";

class scollPos extends Component {
  state = {
    position: 0
  };

  increment = () => {
    let { position } = this.state;
    this.setState({ position: (position += 1) });
  };

  decrement = () => {
    let { position } = this.state;
    this.setState({ position: (position -= 1) });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {this.props.children(this.state.position)}
      </div>
    );
  }
}

export default scollPos;
