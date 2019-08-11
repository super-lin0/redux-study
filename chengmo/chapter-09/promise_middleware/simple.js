const isPromise = obj => obj && typeof obj.then === "function";

const promiseMiddleware = ({ dispatch }) => next => action =>
  isPromise(action) ? action.then(dispatch) : next(action);

export default promiseMiddleware;
