import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *, *:before, *:after {
      box-sizing: inherit;
  }

  :root {
  --headingColor: hsl(288, 100%, 18%);
    --headingColor: hsl(206, 100%, 18%);

  ${'' /* --textColor: #333; */}
  --NavTextColor: #001220;
  --textColor: #FFFFFF;
  --bubbleBig: #001220;
  --bubbleSide: #FBAE3D;

  --backgroundColor: hsl(288, 100%, 95%);
    --backgroundColor: #001220;
    --backgroundColor: hsl(206, 100%, 6%);

  --projectsBackgroundColor: hsl(288, 100%, 18%);
    --projectsBackgroundColor: hsl(206, 100%, 18%);


  --inputBackground: hsla(288, 100%, 96%, 0.7);
  --inputBackground: hsla(206, 100%, 7%, 0.7);
  --inputBackground: #1d1d1e;
  --inputBorder: hsl(288, 100%, 88%);
  --inputBorder: #FFFF;
  --inputText: #333;

  --labelColor: hsl(277, 100%, 26%);
  }

  .dark {
    --headingColor: radial-gradient(
    circle farthest-corner at left center,
    hsl(195, 100%, 90%) -100%,
    hsl(288, 100%, 90%) 50%
  );
    --NavTextColor: #fff;
    --textColor: #001220;

    ${'' /* --textColor:  hsl(288, 100%, 93%); */}
  --bubbleBig: #FBAE3D;
  --bubbleSide: #001220;

    --backgroundColor: hsl(288, 100%, 12%);
    --backgroundColor: hsl(36, 96%, 61%);
    background: var(--backgroundColor);
    --projectsBackgroundColor: hsl(288, 100%, 15%);
    --projectsBackgroundColor: hsl(36, 96%, 64%);


    --inputBackground: hsl(288,100%,10%);
    --inputBackground: hsl(36, 96%, 59%);
    --inputBackground: hsla(36, 96%, 75%, 0.8);

    --inputBorder: hsla(288, 100%, 26%, 0.8);
    --inputBorder: #001220;
    --inputText: hsl(288, 100%, 92%);

    --labelColor: hsl(288, 100%,88%);
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
