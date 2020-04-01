import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "801c88f9";
  const APP_KEY = "eade02e66b8e503a9f76880ee01b2250";

  useEffect(() => {

  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
