import React from 'react';

const IndividualPost = props => {
  if (props.thumbnail === 'self' || props.thumbnail === 'spoiler') {
    return (
      <>
        <h1>{props.title}</h1>
        <p>{props.author}</p>
      </>
    );
  }

  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <img src={props.thumbnail} alt="n/a" />
    </>
  );
};

export default IndividualPost;
