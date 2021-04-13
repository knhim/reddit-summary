import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

//fetch example (reddit.com/r/manga/hot.json)

const fetchData = async () => {
  try {
    const response = await axios.get('https://www.reddit.com/r/manga/hot.json');
    console.log(response.data.data.children[1].data.title);
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  fetchData();
  return (
    <>
      <h1>Home Page</h1>
      <SearchBar />
      <p>How do I get my request?</p>
    </>
  );
};

export default App;
