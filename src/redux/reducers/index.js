import { TOGGLE_GENRE, FILTER_ALBUMS, STORE_GENRES } from '../actionTypes.js'

const initialState = {
  albumFilterTerm: null,
  genres: [],
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
    case STORE_GENRES: {
      return {
        ...state,
        genres: action.payload.value.map(value => ({value: value, selected: false}))
      }
    }
    default:
      return state;
  }
}
