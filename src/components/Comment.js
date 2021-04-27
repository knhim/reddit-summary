import React from 'react';

const Comment = props => {
  return (
    <>
      <p>{props.score}</p>
      <p>{props.body}</p>
      <p>{props.author}</p>
    </>
  );
};

export default Comment;
