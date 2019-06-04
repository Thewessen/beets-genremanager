import React from 'react'
import Genre from './Genre.js'
import { connect } from 'react-redux'
import '../Genres.css'

export const Genres = (props) => {
  return (
    <div id="genres">
      <ul>
        {props.genres.map(genre =>
                          <Genre genre={genre.value}
                                 selected={genre.selected}  />)}
      </ul>
    </div>
  )
}

const $Genres = connect(
  state => ({ genres: state.genres }),
  null
)(Genres)

export default $Genres