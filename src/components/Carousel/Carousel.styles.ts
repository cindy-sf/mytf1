import styled from 'styled-components'

import Button from 'components/Button'

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: thin;
  position: relative;
  max-width: 90rem;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

  & > * {
    margin-right: 1.5rem;
  }
`

const ArrowLeft = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
`

const ArrowRight = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`

export default {
  ArrowLeft,
  ArrowRight,
  Carousel,
}
