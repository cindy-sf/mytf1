import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { render } from '@testing-library/react'

import App from './App'

const client = new ApolloClient({ uri: '', cache: new InMemoryCache() })

describe('<App />', () => {
  it('should render the app properly', () => {
    const { container } = render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
    )

    expect(container).not.toBeEmptyDOMElement()
  })
})
