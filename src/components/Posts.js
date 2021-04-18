import React from 'react';
import IndividualPost from './IndividualPost';

const Posts = props => {
  // grab comments from a thread
  // r.getSubmission('mqy9fz').expandReplies({ limit: 1, depth: 1 }).then(console.log);
  const posts = props.data.children;

  if (posts) {
    return posts.map(post => {
      return (
        <IndividualPost
          key={post.data.id}
          title={post.data.title}
          author={post.data.author}
          thumbnail={post.data.thumbnail}
        />
      );
    });
  }
  return <h1>hello</h1>;
};

export default Posts;
