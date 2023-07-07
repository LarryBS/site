import React from 'react';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <img
          src={require('./logo.png')}
          alt="hubibuy"
        />
        <h1>Welcome to online search site</h1>
      </header>
      <main>
        <SearchBar />
      </main>
    </>
  );
};

export default App;
