import gql from 'graphql-tag'

export const GET_ORGANIZATIONS = gql`
  {
    organization(login: "the-road-to-learn-react") {
      name
      url
      repositories(first: 2, after: "Mg") {
        edges {
          node {
            name
          }
          cursor
        }
      }
    }
  }
`