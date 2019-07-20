import React from "react";
import Counter from "./Counter";
import Summary from "./Summary";

const style = {
  margin: "20px"
};

const ControlPanel = () => {
  return (
    <div style={style}>
      <Counter caption="First" />
      <Counter caption="Second" />
      <Counter caption="Third" />
      <hr />
      <Summary />
    </div>
  );
};

export default ControlPanel;
