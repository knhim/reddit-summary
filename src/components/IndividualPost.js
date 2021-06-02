import React from 'react';

const IndividualPost = props => {
  let linkImage = props.image;

  const handleClick = e => {
    props.setFullThread(true);
    props.setCurrentId(props.threadId);
  };

  //check to see if we need a preview image or not to display
  // if (imageLink === undefined) {
  //   imageLink = props.image;
  // }

  if (
    props.thumbnail === 'self' ||
    props.thumbnail === 'spoiler' ||
    props.thumbnail === 'image' ||
    props.thumbnail === 'default'
  ) {
    return (
      <div className="w-10/12 border-2 border-radius-md" onClick={e => handleClick(e)}>
        <h1 className="font-bold text-sm">{props.title}</h1>
        <div className="flex">
          <p className="italic text-xs">{props.author}</p>
          <p>{props.timePosted}h</p>
        </div>
        <div className="flex">
          <p>{props.numOfComments} comments</p>
          <p>
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            {props.score}
          </p>
        </div>
      </div>
    );
  }

  if (props.previewImage !== undefined) {
    linkImage = props.previewImage.images[0].source.url;
  }

  return (
    <div className="w-10/12 border-2 border-radius-md" onClick={e => handleClick(e)}>
      <img src={linkImage} alt={props.title} />
      <div className="flex-col">
        <h1 className="font-bold text-sm">{props.title}</h1>
        <div className="flex">
          <p className="italic text-xs">{props.author}</p>
          <p>{props.timePosted}h</p>
        </div>
        <div className="flex">
          <p>
            {props.numOfComments} <i>comments</i>
          </p>
          <p>
            <ion-icon name="arrow-up-circle-outline"></ion-icon>
            {props.score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
