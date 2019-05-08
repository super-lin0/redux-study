export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
});

export const receivePosts = (subreddit, posts) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts,
  receiveAt: Date.now()
});

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));
  return dispatch(receivePosts(subreddit, ["123", subreddit, "456"]));
};

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
};
