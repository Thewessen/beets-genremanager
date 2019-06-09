import gql from 'graphql-tag'

export const GET_ALBUMS = gql`
  query Albums($nameContains: String, $genreIn: [String]) {
    albums(nameContains: $nameContains, genreIn: $genreIn) {
      id
      name
      albumArtist
      genre
      year
    }
  }
`
export const GET_GENRES = gql`
  query Genres {
    genres
  }
`