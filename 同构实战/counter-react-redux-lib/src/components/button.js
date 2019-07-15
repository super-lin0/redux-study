import React from "react";

const ButtonAct = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default ButtonAct;
