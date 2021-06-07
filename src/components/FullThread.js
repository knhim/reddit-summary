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
  const id = props.currentId;

  const handleClick = e => {
    props.setFullThread(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        //maybe figure out number of comments later
        let response = await r.getSubmission(id).expandReplies({ limit: 5, depth: 5 });
        // let response = await r.getSubmission('nqdlmm').expandReplies({ limit: 1, depth: 3 });
        response = JSON.parse(JSON.stringify(response));
        setThread(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  // r.getSubmission('mw34d1').expandReplies({ limit: 4, depth: 4 }).then(console.log);

  //issue here is grabbing the element that we clicked on (the first one)

  return (
    <>
      <div className="sticky top-0">
        <button
          className="ml-2 my-1 p-1 text-white bg-red-400 rounded border-2 border-red-500"
          onClick={e => handleClick(e)}
        >
          Go Back
        </button>
      </div>

      <div className="">
        <div className="w-6/12 m-auto flex justify-between p-1 border-2 border-radius-md">
          <div className="ml-1 flex flex-col justify-between">
            <h1 className="font-bold text-sm">{thread.title}</h1>
            <div>
              <div>
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

          <div>
            <a href={thread.url}>
              <img src={thread.thumbnail} alt={thread.title} />
            </a>
          </div>
        </div>
        <div className="m-3">
          <Comments comments={thread.comments} />
        </div>
      </div>
    </>
  );
};

export default FullThread;
