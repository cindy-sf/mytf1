import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset};

  body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    box-sizing: border-box;
    color: #fff;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`
