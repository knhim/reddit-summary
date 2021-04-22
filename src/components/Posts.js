import React from 'react';
import IndividualPost from './IndividualPost';

const Posts = props => {
  const posts = props.data;

  if (posts) {
    return posts.map(post => {
      const convertedUTC = new Date(post.created_utc * 1000);
      const totalMinutesPostedAgo = convertedUTC.getHours() * 60 + convertedUTC.getMinutes();
      const currentDate = new Date();
      const currentMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();

      const timePosted = Math.abs(Math.round((currentMinutes - totalMinutesPostedAgo) / 60));

      return (
        <IndividualPost
          key={post.id}
          title={post.title}
          author={post.author}
          image={post.url}
          thumbnail={post.thumbnail}
          timePosted={timePosted}
          numOfComments={post.num_comments}
          score={post.score}
        />
      );
    });
  }
  return <h1>hello</h1>;
};

export default Posts;
