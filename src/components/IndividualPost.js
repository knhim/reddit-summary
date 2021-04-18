import React from 'react';

const IndividualPost = props => {
  if (
    props.thumbnail === 'self' ||
    props.thumbnail === 'spoiler' ||
    props.thumbnail === 'image' ||
    props.thumbnail === 'default'
  ) {
    return (
      <div className="w-9/12 border-2 border-radius-md">
        <h1 className="font-bold text-sm">{props.title}</h1>
        <p className="italic text-xs">{props.author}</p>
        <p>{props.createdUTC}</p>
        <p>{props.numOfComments}</p>
        <p>{props.score}</p>
      </div>
    );
  }

  return (
    <div className="w-9/12 border-2 border-radius-md">
      <img src={props.thumbnail} alt="n/a" />
      <div className="flex-col">
        <h1 className="font-bold text-sm">{props.title}</h1>
        <p className="italic text-xs">{props.author}</p>
        <p>{props.createdUTC}</p>
        <p>{props.numOfComments}</p>
        <p>{props.score}</p>
      </div>
    </div>
  );
};

export default IndividualPost;
