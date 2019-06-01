import { TOGGLE_GENRE } from './actionTypes.js'

export const toggleGenre = (genre) => ({
  type: TOGGLE_GENRE,
  value: genre
})