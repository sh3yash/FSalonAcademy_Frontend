import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="py-4 text-center">
      <input
        type="text"
        className="px-4 py-2 bg-transparent border-b-2 border-white text-white placeholder-white rounded-full w-full max-w-lg focus:outline-none"
        placeholder="Search events, challenges, and results..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
