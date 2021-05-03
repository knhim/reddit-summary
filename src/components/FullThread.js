import React, { useState, useEffect } from 'react';
import Comments from './Comments';
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
  const [thread, setThread] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await r.getSubmission('mw34d1').expandReplies({ limit: 1, depth: 3 });
        response = JSON.parse(JSON.stringify(response));
        setThread(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // r.getSubmission('mw34d1').expandReplies({ limit: 4, depth: 4 }).then(console.log);

  //issue here is grabbing the element that we clicked on (the first one)

  return (
    <>
      <div className="w-10/12 border-2 border-radius-md">
        <img src={thread.thumbnail} alt={thread.title} />
        <div className="flex-col">
          <h1 className="font-bold text-sm">{thread.title}</h1>
          <div className="flex">
            <p className="italic text-xs">{thread.author}</p>
          </div>
          <div className="flex">
            <p>
              {thread.num_comments} <i>comments</i>
            </p>
            <p>
              <ion-icon name="arrow-up-circle-outline"></ion-icon>
              {thread.score}
            </p>
          </div>
        </div>
      </div>
      <div className="m-3">
        <Comments comments={thread.comments} />
      </div>
    </>
  );
};

export default FullThread;
