import React from 'react'
import '../App.css'
import Genres from './Genres.js'
import AlbumFilter from './AlbumFilter.js'
import AlbumList from './AlbumList.js'

const App = () => {
  return (
    <div id='app'>
      <div id='genres-container'>
        <Genres />
      </div>
      <div id='albums-container'>
        <AlbumFilter />
        <AlbumList />
      </div>
    </div>
  )
}

export default App
