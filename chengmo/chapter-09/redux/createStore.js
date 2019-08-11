const createStore = (reducer, preloadedState, enhancer) => {
  let state;
  // 用来存储所有的监听函数
  let listeners = [];

  const dispatch = action => {
    // 触发reducer函数执行
    state = reducer(state, action);

    // 每一次状态更新之后，都需要调用listeners数组中的每一个监听函数
    listeners.forEach(listener => listener());
  };

  const getState = () => state;

  const subscribe = listener => {
    // subscribe可能会被调用多次，每一个调用，都将相关的监听函数存入listener数组中
    listeners.push(listener);

    // 返回一个函数，用于取消订阅
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);

      // 或者
      // listeners = listeners.filter(item => item !== listener);
    };
  };

  const replaceReducer = nextReducer => {
    reducer = nextReducer;
  };

  dispatch({});

  return { getState, subscribe, replaceReducer, dispatch };
};

export { createStore };
