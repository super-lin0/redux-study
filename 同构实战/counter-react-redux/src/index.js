import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import Counter from "./components";
import reducer from "./reducers";

const store = createStore(reducer);
const rootEle = document.getElementById("root");

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootEle
  );

render();
store.subscribe(render);
