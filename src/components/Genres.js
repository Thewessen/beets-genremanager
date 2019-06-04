import React, { useEffect } from 'react'
import Genre from './Genre.js'
import { connect } from 'react-redux'
import '../Genres.css'

const Genres = (props) => {
  useEffect(() => { /* I would however prefer to not use effects,
                       but to simply perform this outside the Component,
                       and to pass the data in via props or set it in state. */
    fetch('https://randomuser.me/api/')
      .then(function (data) { return data.json() })
      .then(results => console.log(results.results[0]))
  }, [])
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

export default connect(
  state => ({ genres: state.genres }),
  null
)(Genres)