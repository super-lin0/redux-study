/**
 * 接收多个reducer函数，并进行整合，归一化成了一个rootReducer
 * 其返回值rootReducer将会成为createStore的参数，完成store的创建
 *
 * 工作方式：只接收一个参数，这个参数阐述了不同reducer函数也页面状态数据树不同部分的映射匹配关系
 * combineReducer({reducer1, reducer2, reducer3, ...})
 */
const combineReducer = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
