import React from 'react'
import '../Albums.css'
import { Query } from 'react-apollo'
import { GET_ALBUMS } from '../queries'

const Albums = () => {
  return (
    <Query query={GET_ALBUMS}>
      {({loading, error, data}) => {
        if (loading) {
          return <p>Loading...</p>
        } else if (error) {
          return <p>Error...</p>
        }
        return (
          <div className='albums-container'>
            <h1>Albums</h1>
            <div className='album-container'>
              {data.albums.map(album => {
                return (
                  <div>
                    <div><h2>{album.name}</h2></div>
                    <div><strong>Album artist:</strong> {album.albumArtist}</div>
                    <div><strong>Genre:</strong> {album.genre}</div>
                    <div><strong>Year:</strong> {album.year}</div>
                  </div>
                )})}
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Albums