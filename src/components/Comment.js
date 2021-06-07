import React from 'react';

const Comment = props => {
  return (
    <div className="border-t-2 w-6/12 m-auto">
      <div className="flex">
        <p className="mr-2 text-red-400">{props.author}</p>
        <p className="flex items-center text-xs">{props.score} points</p>
      </div>
      <p>{props.body}</p>
    </div>
  );
};

export default Comment;
