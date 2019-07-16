import React, { Component } from "react";
import Counter from "./counter.js";

const style = {
  margin: "20px"
};

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.initValues = [0, 10, 20];

    const initSum = this.initValues.reduce((a, b) => a + b, 0);
    this.state = {
      sum: initSum
    };
  }

  onUpdate = (newValue, prevValue) => {
    const valueChange = newValue - prevValue;
    this.setState({ sum: this.state.sum + valueChange });
  };
  render() {
    return (
      <div style={style}>
        <Counter onUpdate={this.onUpdate} caption="First" />
        <Counter onUpdate={this.onUpdate} caption="Second" initValue={10} />
        <Counter onUpdate={this.onUpdate} caption="Third" initValue={20} />
        <button onClick={() => this.forceUpdate()}>
          Click me to re-render
        </button>
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    );
  }
}

export default ControlPanel;
