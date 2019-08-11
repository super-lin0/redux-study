const isPromise = obj => obj && typeof obj.then === "function";

const promiseMiddleware = ({ dispatch }) => next => action => {
  const { types = [], promise, ...rest } = action;
  if (!isPromise(promise) || !(types.length === 3)) {
    return next(action);
  }

  const [PENDING, DONE, FAIL] = types;
  dispatch({ ...rest, type: PENDING });

  return promise.then(
    result => dispatch({ ...rest, result, type: DONE }),
    err => dispatch({ ...rest, err, type: FAIL })
  );
};

export default promiseMiddleware;
