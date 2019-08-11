import React from "react";

import TodoList from "./todoList";
import AddTodo from "./addTodo";

import "./index.css";

const Todos = () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todos;
