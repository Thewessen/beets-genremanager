import { SELECT_GENRE } from './actionTypes.js'

export const selectGenre = (genre) => ({
  type: SELECT_GENRE,
  value: genre
})