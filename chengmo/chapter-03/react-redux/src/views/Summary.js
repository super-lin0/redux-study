import React from "react";
import { connect } from "react-redux";

const Summary = ({ value }) => {
  return <div>Total Count: {value}</div>;
};

const mapStateToProps = state => {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }

  return { value: sum };
};

export default connect(mapStateToProps)(Summary);
