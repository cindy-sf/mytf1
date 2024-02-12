import { render, screen } from '@testing-library/react'

import Carousel from './Carousel'

describe('components/Carousel', () => {
  it('should render the component properly', () => {
    render(<Carousel>Carousel comp</Carousel>)

    expect(screen.getByText('Carousel comp')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '‹' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '›' })).toBeInTheDocument()
  })
})
