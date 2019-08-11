const CHANGE_THEME = store => next => action => {
  if (action.type === "CHANGE_THEME") {
    if (localStorage.get("theme") !== action.payload) {
      localStorage.setItem("theme", action.payload);
    }
  }
  return next(action);
};
