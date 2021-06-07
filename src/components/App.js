import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import Posts from './Posts';
import FullThread from './FullThread';

require('dotenv').config();
const snoowrap = require('snoowrap');

// import IndividualPost from './IndividualPost';

// fetch example (reddit.com/r/manga/hot.json)
const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
});

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('all');
  const [fullThread, setFullThread] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await r.getHot(`${query}`);
        response = JSON.parse(JSON.stringify(response));
        setData(response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [searchTerm, query]);

  if (fullThread === true) {
    return <FullThread currentId={currentId} setFullThread={setFullThread} />;
  } else {
    return (
      <div className="my-4">
        <h1 className="flex justify-center">Home Page</h1>
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <div className="grid place-items-center grid-cols-1 gap-4">
          <Posts
            data={data}
            fullThread={fullThread}
            setFullThread={setFullThread} /*handleClick={handleClick}*/
            setCurrentId={setCurrentId}
          />
        </div>
      </div>
    );
  }
};

export default App;
