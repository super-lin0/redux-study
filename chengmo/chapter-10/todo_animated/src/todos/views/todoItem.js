import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onToggle: id => dispatch(toggleTodo(ownProps.id)),
    onRemove: id => dispatch(removeTodo(ownProps.id))
  };
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    console.log("enter TodoItem constructor: " + this.props.text);
  }

  render() {
    const { text, completed, onToggle, onRemove } = this.props;
    const checkedProp = completed ? { checked: true } : {};
    console.log("enter TodoItem render: " + text);

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
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
