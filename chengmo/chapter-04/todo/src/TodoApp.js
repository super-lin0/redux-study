import React, { Component } from "react";

import { views as Todos } from "./todos";
import { views as Filters } from "./filter";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Todos />
        <Filters />
      </div>
    );
  }
}

export default TodoApp;
