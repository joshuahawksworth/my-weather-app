import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city');
      return;
    }
    
    setError('');
    try {
      await onSearch(city);
    } catch (error) {
      setError('Failed to fetch weather data');
      onSearch('');
    }
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center">
        <input className="border border-gray-300 rounded py-2 px-4 mr-2 text-black" type="text" value={city} placeholder='Enter city' onChange={(e) => setCity(e.target.value)} />
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default SearchBar;