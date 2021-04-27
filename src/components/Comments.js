import React from 'react';
import Comment from './Comment';

const Comments = props => {
  if (props.comments) {
    return props.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          score={comment.score}
          body={comment.body}
          author={comment.author}
        />
      );
    });
  }
  return <p>loading...</p>;
};

export default Comments;
