import styled from 'styled-components'

import ButtonBase from 'components/Button'

const Button = styled(ButtonBase)`
  position: absolute;
  bottom: 0.6rem;
  right: 0.6rem;
`

const Card = styled.div`
  width: 12.5rem;
`

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
`

const PictureContainer = styled.div`
  width: 100%;
  height: 16.625rem;
  border-radius: 0.5rem;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 0.75rem;
  position: relative;
`

const Title = styled.p`
  font-size: 0.875rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default {
  Button,
  Card,
  Picture,
  PictureContainer,
  Title,
}
