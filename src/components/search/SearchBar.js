// src/components/search/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '37rem',
    maxWidth: '90%',
    margin: '20px auto',
    padding: '10px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.1)',
  };

  const inputStyles = {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    outline: 'none',
  };

  const buttonStyles = {
    padding: '10px',
    border: 'none',
    backgroundColor: '#ccc',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyles = {
    width: '20px',
    height: '20px',
  };

  return (
    <div style={containerStyles}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        style={inputStyles}
      />
      <button onClick={handleSearch} style={buttonStyles}>
        <svg style={iconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 2a8 8 0 106.32 14.906l4.387 4.387-1.415 1.415-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
