import React from "react";

const buttonStyle = {
  margin: "20px"
};

const Counter = ({ caption, handleDecrement, handleIncrement, count }) => {
  return (
    <div>
      <button style={buttonStyle} onClick={handleIncrement}>
        +
      </button>
      <button style={buttonStyle} onClick={handleDecrement}>
        -
      </button>
      <span>
        {caption} count: {count}
      </span>
    </div>
  );
};

export default Counter;
