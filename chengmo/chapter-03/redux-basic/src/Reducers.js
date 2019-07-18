import * as ActionTypes from "./ActionTypes.js";

export default (state, action) => {
  const { counterCaption, type } = action;

  switch (type) {
    case ActionTypes.DECREMENT:
      return { ...state, [counterCaption]: state[counterCaption] - 1 };
    case ActionTypes.INCREMENT:
      return { ...state, [counterCaption]: state[counterCaption] + 1 };
    default:
      return state;
  }
};
