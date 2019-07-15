import React, { Component } from "react";
import { connect } from "react-redux";

import Picker from "../components/Picker";
import Posts from "../components/Posts";
import {
  SELECT_SUBREDDIT,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from "../actions";

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }
  handleChange = value => {
    const { dispatch } = this.props;
    dispatch({
      type: SELECT_SUBREDDIT,
      subreddit: value
    });
  };

  handleRefreshClick = e => {
    e.preventDefault();
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };
  render() {
    const {
      selectedSubreddit,
      lastUpdated,
      isFetching,
      posts = []
    } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={["reactjs", "fronted"]}
        />
        <p>
          {lastUpdated && (
            <span>
              {" "}
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
          {!isFetching && (
            <button onClick={this.handleRefreshClick}>Refersh</button>
          )}
        </p>
        {isEmpty ? (
          isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <h2>Empty.</h2>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedSubreddit, postsBySubreddit }) => {
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || { isFetching: true, items: [] };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
