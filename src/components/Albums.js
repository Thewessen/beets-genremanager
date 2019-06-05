import React from 'react'
import '../Albums.css'
import { Query } from 'react-apollo'
import { GET_ORGANIZATIONS } from '../queries'

const Albums = () => {
  return (
    <Query query={GET_ORGANIZATIONS}>
      {({loading, error, data}) => {
        if (loading) {
          return <p>Loading...</p>
        } else if (error) {
          return <p>Error...</p>
        }
        console.log(data.organization)
        return (
          <div className='album-container'>
            <header className='album-header'>
              <h1>Albums</h1>
              <span>Organization:</span> {data.organization.name}
              <h3>Repositories</h3>
              {data.organization.repositories.edges.map(obj => <p>{obj.node.name}</p>)}
            </header>
          </div>
        )
      }}
    </Query>
  )
}

export default Albums