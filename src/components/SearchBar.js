import React from 'react';

const SearchBar = props => {
  // const [data, setData] = useState({ hits: [] });
  // const [query, setQuery] = useState('');
  // const [url, setUrl] = useState(`https://www.reddit.com/r/frontpage/hot.json`);

  // const handleClick = e => {
  //   e.preventDefault();
  //   setUrl(`https://www.reddit.com/r/${query}/hot.json`);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchData();
  // }, [url]);

  return (
    <>
      <form className="flex justify-center" onSubmit={props.handleSearch}>
        <label htmlFor="search">Search Subreddits</label>
        <input
          value={props.query}
          onChange={e => props.setQuery(e.target.value)}
          type="text"
          className="border-2 border-grey-500"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
