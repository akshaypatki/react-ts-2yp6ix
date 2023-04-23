
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <section>
    <h2>Search</h2>
    <div className="search-container">
      <FaSearch />
      <input
        type="text"
        placeholder="Search blog posts"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  </section>
);

export default SearchBar;
