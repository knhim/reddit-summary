import React from 'react';

const SearchBar = (props) => {
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
      <form className="flex flex-col justify-center mt-1 mb-1" onSubmit={props.handleSearch}>
        <label className="mr-2" htmlFor="search">
          Search Subreddits
        </label>
        <div>
          <input
            value={props.query}
            onChange={(e) => props.setQuery(e.target.value)}
            type="text"
            className="border-2 border-grey-500 w-6/12"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
