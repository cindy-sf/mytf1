import type { Props } from './Carousel.types'

import Styled from './Carousel.styles'

const Carousel = ({ children }: Props) => (
  <Styled.Carousel>
    <Styled.ArrowLeft label="‹" size="medium" />
    {children}
    <Styled.ArrowRight label="›" size="medium" />
  </Styled.Carousel>
)

export default Carousel
