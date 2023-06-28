import React from 'react';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="google-logo">
          <img
            src={require('./logo.png')}
            alt="Google"
            className="logo-image"
          />
        </div>
      </header>
      <div className="content">
        <h1>Welcome to online search site</h1>
        <SearchBar />
        {/* Другой контент страницы */}
      </div>
    </div>
  );
};

export default App;
