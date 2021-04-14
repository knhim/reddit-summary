import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

//fetch example (reddit.com/r/manga/hot.json)

const App = () => {
  const [data, setData] = useState({});

  // useEffect(async () => {
  //   try {
  //     const response = await axios.get('https://www.reddit.com/r/manga/hot.json');
  //     setData(response);
  //     console.log(response.data.data.children[1].data.title);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <>
      <h1>Home Page</h1>
      <SearchBar />
      <p>How do I get my request?</p>
    </>
  );
};

export default App;
