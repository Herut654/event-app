import { useState } from 'react';


const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // לטפל בלוגיקה 
    
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="חיפוש..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className='btn' onClick={handleSearch}>חפש</button>
    </div>
  );
};

export default Search;
