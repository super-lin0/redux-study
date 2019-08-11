const isPromise = obj => obj && typeof obj.then === "function";
const addPromiseSupportDispatch = ({ dispatch }) => next => action =>
  isPromise(action) ? action.then(dispatch) : next(action);
