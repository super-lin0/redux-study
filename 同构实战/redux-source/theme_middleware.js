/**
 * 应用存在多套主题皮肤可供用户选择。这些皮肤在一定时间内往往都是有固定样式的，
 * 在初始化整个应用时候，使用一套默认皮肤。在用户切换主题的情况下。我们希望用户
 * 离开应用后，下次再访问此应用时，荏苒可以直接切入用户上一次选择的主题。
 * 而不是默认主题
 */

/**
 * action
 */
store.dispatch({ type: "CHANGE_THEME", payload: "light" });

/**
 * 中间件开发
 */
const CHANGE_THEME = store => next => action => {
  const { action, payload } = action;
  if (type === "CHANGE_THEME") {
    if (localStorage.getItem("theme") != payload) {
      localStorage.setItem("theme", payload);
    }
  }
  return next(action);
};

/**
 * 业务初始化脚本
 */
store.dispatch({
  type: "CHANGE_THEME",
  payload: localStorage.getItem("theme") || "dark"
});
