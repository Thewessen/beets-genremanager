import { TOGGLE_GENRE, FILTER_ALBUMS, STORE_GENRES } from './actionTypes.js'

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

export const storeGenres = (genres) => ({
  type: STORE_GENRES,
  payload: {
    value: genres
  }
})