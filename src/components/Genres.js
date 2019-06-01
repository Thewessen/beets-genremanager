import React from 'react'
import Genre from './Genre.js'
import { connect } from 'react-redux'
import '../Genres.css'

const Genres = (props) => {
  return (
    <div id="genres">
      <ul>
        {props.genres.map(genre =>
                          <Genre value={genre}
                                 selected={props.selectedGenre == genre ? true : false}  />)}
      </ul>
    </div>
  )
}

export default connect(
  state => ({
    selectedGenre: state.selectedGenre
  }),
  null
)(Genres)