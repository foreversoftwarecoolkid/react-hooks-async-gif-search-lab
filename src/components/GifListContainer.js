// GifListContainer.js
import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    // Fetch data from Giphy API and update state
    // Use your own API key and handle CORS issues
  }, []);

  const handleSearch = (query) => {
    // Implement the logic to fetch gifs based on the user's query
    // Update the state with the fetched gifs
  };

  return (
    <div>
      <GifSearch onSubmit={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
