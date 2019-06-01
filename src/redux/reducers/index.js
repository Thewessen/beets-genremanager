import { SELECT_GENRE } from "../actionTypes.js"

const initialState = {
  genres: [],
  selectedGenre: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GENRE: {
      return {
        genres: [],
        selectedGenre: action.value
      }
    }
    default:
      return state;
  }
}
