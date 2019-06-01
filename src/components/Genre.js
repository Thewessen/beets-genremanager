import React from 'react'
import { connect } from 'react-redux'
import { toggleGenre } from '../redux/actions.js'
import '../Genres.css'

const Genre = (props) => {
  return (
    <div className="genre">
      <li onClick={() => props.toggleGenre(props.value)}
      >
        { props.value }
        { props.selected === true ? ' (selected)' : '' }
      </li>
    </div>
  )
}

export default connect(
  null,
  { toggleGenre }
)(Genre)