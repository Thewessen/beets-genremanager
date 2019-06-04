import Genre from './Genre.js'
import { connect } from 'react-redux'
import '../Genres.css'

const Genres = (props) => {
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