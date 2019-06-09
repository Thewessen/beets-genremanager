import React from 'react'
import { connect } from 'react-redux'
import { toggleGenre } from '../redux/actions.js'
import '../Genres.css'

export const Genre = (props) => {
  return (
    <div className='genre'>
      <li className={props.selected === true ? 'selected' : ''} onClick={() => props.toggleGenre(props.genre)}>
        { props.genre }
      </li>
    </div>
  )
}

export default connect(
  null,
  { toggleGenre }
)(Genre)
