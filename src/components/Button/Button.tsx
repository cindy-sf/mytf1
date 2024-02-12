import type { Props } from './Button.types'

import Styled from './Button.styles'

const Button = ({ className, label, size = 'small' }: Props) => (
  <Styled.Button className={className} size={size}>
    {label}
  </Styled.Button>
)

export default Button
