import React from "react";

import { views as Todos } from "./todos";
import { views as Filters } from "./filter";

const TodoApp = () => {
  return (
    <div>
      <Todos />
      <Filters />
    </div>
  );
};

export default TodoApp;
