import { TOGGLE_GENRE, FILTER_ALBUMS } from './actionTypes.js'

export const toggleGenre = (genre) => ({
  type: TOGGLE_GENRE,
  payload: {
    value: genre
  }
})

export const filterAlbums = (filterTerm) => ({
  type: FILTER_ALBUMS,
  payload: {
    value: filterTerm
  }
})