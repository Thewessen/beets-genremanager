import React from 'react'
import { connect } from 'react-redux'
import { filterAlbums } from '../redux/actions';

export const AlbumFilter = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.filterAlbums(e.target.value)} />
    </div>
  )
}

export default connect(
  null,
  { filterAlbums }
)(AlbumFilter)