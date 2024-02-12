import type { Props } from './Card.types'

import Styled from './Card.styles'

const Card = ({ alt, picture, title }: Props) => (
  <Styled.Card>
    <Styled.PictureContainer>
      <Styled.Picture src={picture} alt={alt} />
      <Styled.Button label="+" />
    </Styled.PictureContainer>
    <Styled.Title>{title}</Styled.Title>
  </Styled.Card>
)

export default Card
