import gql from 'graphql-tag'

export const GET_ALBUMS = gql`
  {
    albums(contains: "yr") {
      name
      albumArtist
      genre
      year
    }
  }
`