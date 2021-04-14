import React from 'react';

const IndividualPost = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.thumbnail} alt="n/a" />
    </>
  );
};

export default IndividualPost;
