import React from 'react'
import '../App.css'
import Genres from './Genres.js'
import Albums from './Albums.js'

const App = () => {
  return (
    <div id="app">
      <div id="genres-container">
        <Genres />
      </div>
      <div id="albums-container">
          <Albums />
      </div>
    </div>
  )
}

export default App
