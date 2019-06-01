import React from 'react'
import '../App.css'
import Genres from './Genres.js'
import Albums from './Albums.js'

const App = () => {
  const genres = ['Blues', 'Electronic']
  return (
    <div id="app">
      <div id="genres-container">
        <Genres genres={genres} />
      </div>
      <div id="albums-container">
          <Albums />
      </div>
    </div>
  )
}

export default App
