import React from 'react';
import IndividualPost from './IndividualPost';

const Posts = props => {
  const posts = props.data.children;

  if (posts) {
    return posts.map(post => {
      return (
        <IndividualPost
          key={post.data.id}
          title={post.data.title}
          thumbnail={post.data.thumbnail}
        />
      );
    });
  }
  return <h1>hello</h1>;
};

export default Posts;
