import React from 'react';
import './App.css';
import Genres from './Genres.js'
import Albums from './Albums.js'

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Beets Genre Tagger</h1>
      </header>
      <div className="App-container">
        <div className="Genres">
          <Genres></Genres>
        </div>
        <div className="Albums">
          <Albums></Albums>
        </div>
      </div>
    </main>
  );
}

export default App;
