import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'

import { GET_PROGRAM, programFixture } from 'services/program'

import Home from './Home'

describe('pages/Home', () => {
  const programMock: MockedResponse = {
    request: {
      query: GET_PROGRAM,
      variables: { limit: 6 },
    },
    result: {
      data: programFixture,
    },
  }

  const renderHome = (overwrite?: MockedResponse) =>
    render(
      <MockedProvider mocks={[overwrite ?? programMock]} addTypename={false}>
        <Home />
      </MockedProvider>,
    )

  it('should render the page properly', async () => {
    renderHome()

    expect(
      await screen.findByText(programFixture.program[0].name),
    ).toBeInTheDocument()
  })

  it('should render a loading text when the data is fetching', () => {
    renderHome({ ...programMock, delay: Infinity })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render an error text when a error is occured', async () => {
    renderHome({
      ...programMock,
      result: undefined,
      error: new Error('An error occurred'),
    })

    expect(await screen.findByText(/An error occurred/)).toBeInTheDocument()
  })
})
