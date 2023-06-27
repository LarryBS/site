import React, { useState } from 'react';
import './SearchBar.css'; // Импорт файла стилей

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSite, setSelectedSite] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSiteSelection = (event) => {
    setSelectedSite(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    console.log('Selected site:', selectedSite);

    if (selectedSite === 'amazon') {
      window.location.href = `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`;
    } else if (selectedSite === 'aliexpress') {
      window.location.href = `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(searchTerm)}`;
    }

    // Добавьте здесь логику для обработки отправки запроса на сервер или выполнения других действий с поисковым запросом и выбранным сайтом
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="site-filter">
        <select value={selectedSite} onChange={handleSiteSelection} className="site-dropdown">
          <option value="">Select a site</option>
          <option value="aliexpress">AliExpress</option>
          <option value="amazon">Amazon</option>
          {/* Добавьте здесь другие опции для сайтов */}
        </select>
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
