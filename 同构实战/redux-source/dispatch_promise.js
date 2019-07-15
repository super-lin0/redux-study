/**
 * dispatch接收Promise对象，处理Redux下的异步问题
 * 思路：dispatch接收Promise对象，在这个Promise对象resolve之后，使用原始的dispatch进行action触发
 */

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    /**
     * 检查action是否具有then方法，即判断action是否是一个thenable对象。
     * 如果是就会等待这个Promise resolve，生成一个JavaScript对象，
     * 这个对象即为标准的action，同时利用原始的dispatch对这个标准的action进行派发
     */
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

// if(process.env.NODE_ENV !== "production") {
//   const store.dispatch = addPromiseSupportToDispatch
// }

export default addPromiseSupportToDispatch;
