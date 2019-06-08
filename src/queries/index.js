import gql from 'graphql-tag'

export const GET_ALBUMS = gql`
  query Albums($nameContains: String, $genreIn: [String]) {
    albums(nameContains: $nameContains, genreIn: $genreIn) {
      name
      albumArtist
      genre
      year
    }
  }
`