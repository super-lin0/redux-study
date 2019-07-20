import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../Actions.js";

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

const mapStateTpProps = (state, ownProps) => {
  return {
    value: state[ownProps.caption]
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleIncrement: () => dispatch(increment(ownProps.caption)),
    handleDecrement: () => dispatch(decrement(ownProps.caption))
  };
};

export default connect(
  mapStateTpProps,
  mapDispatchToProps
)(Counter);
