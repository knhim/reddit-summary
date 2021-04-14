import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Posts from './Posts';
// import IndividualPost from './IndividualPost';

//fetch example (reddit.com/r/manga/hot.json)

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState(`https://www.reddit.com/r/all/hot.json`);

  const handleClick = e => {
    e.preventDefault();
    setUrl(`https://www.reddit.com/r/${query}/hot.json`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
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
