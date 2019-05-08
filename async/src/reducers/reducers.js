import { combineReducers } from "redux";

const selectedSubreddit = (state = "reactjs", action) => state;

const postsBySubreddit = (state = {}, action) => state;

const rootReducer = combineReducers({ selectedSubreddit, postsBySubreddit });

export default rootReducer;
