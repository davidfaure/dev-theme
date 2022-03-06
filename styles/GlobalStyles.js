import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *, *:before, *:after {
      box-sizing: inherit;
  }

  :root {
  --NavTextColor: #001220;
  --textColor: #FFFFFF;
   
  --bubbleBig: #001220;
  --bubbleSide: #FBAE3D;

  --backgroundColor: #001220;

  --inputBackground: #1d1d1e;
  --inputBorder: #FFFF;
  --inputText: #333;

  }

  .dark {
  --NavTextColor: #fff;
  --textColor: #001220;

  --bubbleBig: #FBAE3D;
  --bubbleSide: #001220;

  --backgroundColor: hsl(36, 96%, 61%);
    background: var(--backgroundColor);

  --inputBackground: hsla(36, 96%, 75%, 0.8);

  --inputBorder: #001220;

  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    background: var(--backgroundColor);
  }

  #__next {
    height: 100%;
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6, p {
  text-rendering: optimizeLegibility;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles
