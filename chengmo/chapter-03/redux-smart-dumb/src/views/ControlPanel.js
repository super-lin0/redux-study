import React, { Component } from "react";
import Counter from "./CounterContainer";
import Summary from "./SummaryContainer";

const style = {
  margin: "20px"
};

class ControlPanel extends Component {
  render() {
    return (
      <div style={style}>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;
