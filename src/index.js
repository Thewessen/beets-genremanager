import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import App from './components/App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const apolloClient = new ApolloClient({
  request: async (operation) => {
    operation.setContext({
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      }
    })
  },
  uri: 'https://api.github.com/graphql'
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
