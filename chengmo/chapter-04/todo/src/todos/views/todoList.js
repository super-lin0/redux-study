import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoItem from "./todoItem";
import { FilterTypes } from "../../constants";
import { toggleTodo, removeTodo } from "../actions";

const TodoList = ({ todos = [], onToggleTodo, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error("unsupported filter");
  }
};

const mapStateToProps = ({ todos, filter }) => {
  return {
    todos: selectVisibleTodos(todos, filter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: id => dispatch(toggleTodo(id)),
    onRemoveTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
