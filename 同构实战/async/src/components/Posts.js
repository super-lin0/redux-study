import React from "react";

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Posts;
