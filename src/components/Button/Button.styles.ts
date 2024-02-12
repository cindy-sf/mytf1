import styled, { css } from 'styled-components'

import type { Props } from './Button.types'

const Button = styled.button<Required<Pick<Props, 'size'>>>`
  cursor: pointer;
  display: flex;
  border: none;
  justify-content: center;
  background-color: #313132;
  width: 2rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  font-size: 1.5rem;

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      background-color: #313132;
      border-radius: 0;
    `}
`

export default {
  Button,
}
