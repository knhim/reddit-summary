import React, { useState, useEffect } from 'react';
import IndividualPost from './IndividualPost';
const snoowrap = require('snoowrap');

// grab comments from a thread
// r.getSubmission('mqy9fz').expandReplies({ limit: 1, depth: 1 }).then(console.log);

const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
});

const FullThread = props => {
  const [comments, setComments] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await r.getSubmission('mw34d1').expandReplies({ limit: 4, depth: 4 });
        response = JSON.parse(JSON.stringify(response));
        setComments(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  });

  // r.getSubmission('mw34d1').expandReplies({ limit: 4, depth: 4 }).then(console.log);

  //issue here is grabbing the element that we clicked on (the first one)

  return <h1>loading...</h1>;
};

export default FullThread;
