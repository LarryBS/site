import React, { useState } from 'react';
import './SearchBar.css'; // Импорт файла стилей

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSite, setSelectedSite] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSiteSelection = (event) => {
    setSelectedSite(event.target.value);
  };

  const handleCountrySelection = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    console.log('Selected site:', selectedSite);
    console.log('Selected country:', selectedCountry);
    console.log('Max price:', maxPrice);

    let searchQuery = encodeURIComponent(searchTerm);

    if (selectedCountry) {
      searchQuery += `&country=${encodeURIComponent(selectedCountry)}`;
    }

    if (maxPrice) {
      searchQuery += `&maxPrice=${encodeURIComponent(maxPrice)}`;
    }

    if (selectedSite === 'amazon') {
      window.location.href = `https://www.amazon.com/s?k=${searchQuery}`;
    } else if (selectedSite === 'aliexpress') {
      window.location.href = `https://www.aliexpress.com/wholesale?SearchText=${searchQuery}`;
    }

    // Добавьте здесь логику для обработки отправки запроса на сервер или выполнения других действий с поисковым запросом и выбранными параметрами
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
      <div className="country-filter">
        <select value={selectedCountry} onChange={handleCountrySelection} className="country-dropdown">
          <option value="">Select a country</option>
          <option value="usa">USA</option>
          <option value="china">China</option>
          <option value="uk">UK</option>
          {/* Добавьте здесь другие опции для стран */}
        </select>
      </div>
      <div className="max-price-filter">
        <select value={maxPrice} onChange={handleMaxPriceChange} className="max-price-dropdown">
          <option value="">Max Price</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="150">$150</option>
          <option value="200">$200</option>
        </select>
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
