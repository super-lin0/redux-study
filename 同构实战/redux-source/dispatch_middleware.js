const promise = store => next => action => {
  if (typeof action.then === "function") {
    return action.then(next);
  }
  return next(action);
};

const logger = store => next => {
  if (!console.group) {
    return next;
  }

  return action => {
    console.group(action.type);
    console.log("%c previous state:", "color: red", store.getState());
    console.log("%c action:", "color: blue", action);

    const returnValue = next(action);

    console.log("%c next state:", "color: green", store.getState);
    console.group(action.type);

    return returnValue;
  };
};

const configureStore = () => {
  const store = createStore(App);
  const middlewares = [];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(addLoggingToDispatch);
  }

  middlewares.push(addPromiseSupportToDispatch);

  wrapDispatchWithMiddlewares(store, middlewares);

  return sttore;
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach(
      middleware => (store.dispatch = middleware(store)(store.dispatch))
    );
};
