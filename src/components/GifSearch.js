// GifSearch.js
import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the callback prop with the current input value
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your Giphy search"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
