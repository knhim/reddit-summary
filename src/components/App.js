import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Posts from './Posts';
require('dotenv').config();
const snoowrap = require('snoowrap');
// import IndividualPost from './IndividualPost';
console.log(process.env.REACT_APP_CLIENT_ID);
// fetch example (reddit.com/r/manga/hot.json)
const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
});

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(`https://www.reddit.com/r/all/hot.json`);
  //show hot threads from this subreddit
  // r.getHot('manga');
  // grab comments from a thread
  r.getSubmission('mqy9fz').expandReplies({ limit: 1, depth: 1 }).then(console.log);

  const handleClick = e => {
    e.preventDefault();
    setUrl(`https://www.reddit.com/r/${query}/hot.json`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <h1 className="flex justify-center">Home Page</h1>
      <SearchBar query={query} setQuery={setQuery} handleClick={handleClick} />
      <Posts data={data} />
      {/* <IndividualPost data={data} /> */}
    </>
  );
};

export default App;
