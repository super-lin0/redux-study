import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TodoItem from "./todoItem";
import { FilterTypes } from "../../constants";

const TodoList = ({ todos = [] }) => {
  return (
    <ul className="todo-list">
      {todos.map(item => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
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

export default connect(mapStateToProps)(TodoList);
