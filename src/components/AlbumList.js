import React from 'react'
import { connect } from 'react-redux'
import '../Albums.css'
import { Query } from 'react-apollo'
import { GET_ALBUMS } from '../queries'

export const AlbumList = (props) => {
  let selectedGenres = props.genres
                         .filter(g => g.selected)
                         .map(g => g.value)

  return (
    <Query query={GET_ALBUMS} variables={{ genreIn: selectedGenres, nameContains: props.albumFilterTerm }}>
      {({loading, error, data}) => {
        return (
          <div id='album-list-container'>
            <h1>Albums</h1>
            { loading
              ? <p>Loading...</p>
              : error
                ? <p>Error...</p>
                : ''
            }
            <div className='album-list-item-container'>
              {!error && !loading && data.albums ? data.albums.map(album => {
                return (
                  <div>
                    <div><h3>{album.name}</h3></div>
                    <div><strong>Album artist:</strong> {album.albumArtist}</div>
                    <div><strong>Genre:</strong> {album.genre}</div>
                    <div><strong>Year:</strong> {album.year}</div>
                  </div>
                )}) : ''}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default connect(
  state => ({
    genres: state.genres,
    albumFilterTerm: state.albumFilterTerm
  }),
  null
)(AlbumList)