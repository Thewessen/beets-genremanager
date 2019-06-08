import gql from 'graphql-tag'

export const GET_ALBUMS = gql`
  query Albums($contains: String) {
    albums(contains: $contains) {
      name
      albumArtist
      genre
      year
    }
  }
`

//export const UPDATE_GENRE = 