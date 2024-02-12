import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import App from './App'
import GlobalStyle from './index.styles'

import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  uri: 'https://tf1-interview.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)

reportWebVitals()
