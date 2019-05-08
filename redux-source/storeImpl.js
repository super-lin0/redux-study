const createStore = reducer => {
  let state;

  // listeners用于存储所有的监听函数（回调函数，这些函数用来处理页面组件重新渲染的逻辑）
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    // 每一次状态更新后，都需要调用listeners数组中的每一个监听函数
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    // subscribe 可能会被调用多次，每一次调用时，都将相关的监听函数存入listeners数组中
    listeners.push(listener);

    /**
     * Redux设计中，subscribe函数被调用后会返回一个取消订阅的函数
     * 返回一个函数，进行取消订阅
     */
    return () => {
      listeners = listeners.filter(item !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};
