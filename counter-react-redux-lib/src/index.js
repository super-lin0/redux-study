import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

import reducer from "./reducers";
import Counter from "./components";

const store = createStore(reducer);

const mapStateToProps = state => {
  return { value: state };
};

const mapDispatchToProps = state => {
  return {
    onIncrement: () => {
      store.dispatch({ type: "INCREMENT" });
    },
    onDecrement: () => {
      store.dispatch({ type: "DECREMENT" });
    }
  };
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
