import { TOGGLE_GENRE } from '../actionTypes.js'

const initialState = {
  genres: [
    { value: 'Blues', selected: true },
    { value: 'Electronic', selected: false },
    { value: 'Rock', selected: false }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_GENRE: {
      return {
        genres: state.genres.map(
          genre => genre.value === action.payload.value
            ? { value: genre.value, selected: !genre.selected }
            : genre
        )
      }
    }
    default:
      return state
  }
}
