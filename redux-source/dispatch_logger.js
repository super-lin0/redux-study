/**
 * 通过改造dispatch方法，使得每次派发action时候都可以通过console.log打印信息
 */

const addLoggingToDispatch = store => {
  // 对store中的dispatch进行拦截，记录原始的dispatch为rawDispatch
  const rawDispatch = store.dispatch;

  // 对console.group兼容性进行判断和处理
  if (!console.group) {
    return rawDispatch;
  }

  // 返回一个新的函数，这个函数就是添加更新日志之后的全新的dispatch
  return action => {
    // 按照action类型进行分组，保证同一个action下拥有相同日志的title
    console.group(action.type);

    // 打印更新前的state
    console.log("%c previous state:", "color: gray", store.getState());
    // 打印当前action
    console.log("%c action", "color: blue", action);

    // 调用原始的dispatch并记录返回结果
    const returnValue = rawDispatch(action);

    // 打印更新后的state
    console.log("%c next state:", "color: green", store.getState());

    console.group(action.type);

    return returnValue;
  };
};

// 加上对环境的判断
if(prosess.env.NODE_ENV !== "production") {
  const store.dispatch = addLoggingToDispatch(store);
}
