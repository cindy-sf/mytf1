import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('components/Button', () => {
  it('should render the button properly', () => {
    render(<Button label="Some label" />)

    expect(
      screen.getByRole('button', { name: 'Some label' }),
    ).toBeInTheDocument()
  })
})
