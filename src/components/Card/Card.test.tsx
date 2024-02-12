import { render, screen } from '@testing-library/react'

import type { Props } from './Card.types'

import Card from './Card'

describe('components/Card', () => {
  it('should render the card properly', () => {
    const props: Props = {
      picture: 'https://image.png',
      alt: 'picture',
      title: 'Title',
    }

    render(<Card {...props} />)

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByAltText(props.alt)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  })
})
