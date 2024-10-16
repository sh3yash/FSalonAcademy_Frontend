import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust the import path as necessary

const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative bg-cover bg-center h-80 overflow-hidden" style={{ backgroundImage: "url('/src/assets/crousel1.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-4">
        <h1 className=" font-bold mt-2 text-2xl whitespace-nowrap overflow-hidden">Join Our Beauty Contest!</h1>
        <p className="mt-2 text-lg whitespace-nowrap">Showcase your skills and stand a chance to win amazing prizes.</p>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HeroSection;
