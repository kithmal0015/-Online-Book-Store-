import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title'); 

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchBy);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select 
        value={searchBy} 
        onChange={(e) => setSearchBy(e.target.value)}
        className="search-select"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;