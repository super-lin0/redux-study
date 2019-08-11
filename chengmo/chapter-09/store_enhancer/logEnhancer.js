const logEnhancer = createStore => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer);

  const originDispatch = store.dispatch;
  store.dispatch = action => {
    console.log("dispatch action", action);
    originDispatch(action);
  };
  return store;
};
