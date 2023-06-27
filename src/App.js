import React from 'react';
import SearchBar from './SearchBar';
import './App.css';
import './CategoryPanel.css';

const CategoryPanel = () => {
  return (
    <div className="category-panel">
      <div className="category-item">Category 1</div>
      <div className="category-item">Category 2</div>
      <div className="category-item">Category 3</div>
      <div className="category-item">Category 4</div>
      <div className="category-item">Category 5</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <CategoryPanel />
      <h1>My Search App</h1>
      <SearchBar />
    </div>
  );
};

export default App;
