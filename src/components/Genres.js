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
        if (loading) {
          return <p>Loading...</p>
        } else if (error) {
          return <p>Error...</p>
        }
        if (data) {
          props.storeGenres(data.genres)
        }
        return (
          <div id="genres">
            <ul>
              {props.genres.map(genre =>
                                <Genre genre={genre.value}
                                       selected={genre.selected}  />)}
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