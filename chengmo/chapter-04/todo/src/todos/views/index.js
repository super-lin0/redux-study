import React, { Component } from "react";

import TodoList from "./todoList";
import AddTodo from "./addTodo";

import "./index.css";

class Todos extends Component {
  render() {
    return (
      <div className="todos">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default Todos;
