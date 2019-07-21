import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ text, completed, onToggle, onRemove }) => {
  const checkedProp = completed ? { checked: true } : {};

  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <input
        className="toggle"
        type="checkbox"
        {...checkedProp}
        readOnly
        onClick={onToggle}
      />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>
        ×
      </button>
    </li>
  );
};

TodoItem.ProTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoItem;
