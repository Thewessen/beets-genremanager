import React from 'react'
import Genre from './Genre.js'
import { connect } from 'react-redux'
import '../Genres.css'
import { Query } from 'react-apollo'
import { GET_GENRES } from '../queries'
import { storeGenres } from '../redux/actions.js'


export const Genres = (props) => {
  return (
    <Query query={GET_GENRES}
           skip={props.genres.length !== 0}>
      {({loading, error, data}) => {
        if (data !== undefined && data.genres) {
          props.storeGenres(data.genres)
        }
        return (
          <div id="genres">
            <h1>Genres</h1>
            { loading
              ? <p>Loading...</p>
              : error
                ? <p>Error...</p>
                : ''
            }
            <ul>
              {!error && !loading && props.genres ? props.genres.map(genre =>
                                <Genre genre={genre.value}
                                       selected={genre.selected}  />) : ''}
            </ul>
          </div>
        )}
      }
    </Query>
  )
}

export default connect(
  state => ({ genres: state.genres }),
  { storeGenres }
)(Genres)