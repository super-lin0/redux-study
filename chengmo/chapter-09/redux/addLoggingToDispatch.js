const addLoggingToDispatch = ({ dispatch, getState }) => next => action => {
  console.log(action, " will dispatch");
  console.log(getState());
  const returnValue = next(action);

  console.log(action, "already dispatched");
  console.log(getState());

  return returnValue;
};
