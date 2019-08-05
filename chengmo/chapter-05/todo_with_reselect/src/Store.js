import { reducer as todoReducer } from "./todos";
import { reducer as filterReducer } from "./filter";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({ todos: todoReducer, filter: filterReducer });

const initialState = {
  todos: [
    {
      id: 0,
      text: "First",
      completed: true
    },
    {
      id: 1,
      text: "Second",
      completed: false
    },
    {
      id: 2,
      text: "Third",
      completed: true
    }
  ]
};

const store = createStore(reducer, initialState);

export default store;
