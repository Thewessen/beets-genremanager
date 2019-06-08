import { TOGGLE_GENRE, FILTER_ALBUMS } from '../actionTypes.js'

const initialState = {
  albumFilterTerm: null,
  genres: [
    { value: 'Blues', selected: true },
    { value: 'Electronic', selected: false },
    { value: 'Rock', selected: false },
  ],
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
    case FILTER_ALBUMS: {
      return {
        ...state,
        albumFilterTerm: action.payload.value
      }
    }
    default:
      return state;
  }
}
