import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  *, *:before, *:after {
      box-sizing: inherit;
  }

  :root {
  ${
    '' /* --headingColor: hsl(288, 100%, 18%);
  --textColor: #333;

  --backgroundColor: hsl(288, 100%, 95%);
  --projectsBackgroundColor: hsl(288, 100%, 18%);

  --inputBackground: hsla(288, 100%, 96%, 0.7);
  --inputBorder: hsl(288, 100%, 88%);
  --inputText: #333;

  --labelColor: hsl(277, 100%, 26%); */
  }
  }

  :root {
  --headingColor: hsl(225, 100%, 18%);
  --textColor: #333;

  --backgroundColor: hsl(225, 100%, 95%);
  --projectsBackgroundColor: hsl(225, 100%, 18%);

  --inputBackground: hsla(225, 100%, 96%, 0.7);
  --inputBorder: hsl(225, 100%, 88%);
  --inputText: #333;

  --labelColor: hsl(215, 100%, 26%);
  }

  ${
    '' /* .dark {
    --headingColor: radial-gradient(
    circle farthest-corner at left center,
    hsl(195, 100%, 90%) -100%,
    hsl(288, 100%, 90%) 50%
  );
    --textColor:  hsl(288, 100%, 93%);

    --backgroundColor: hsl(288, 100%, 12%);
    background: var(--backgroundColor);
    --projectsBackgroundColor: hsl(288, 100%, 15%);

    --inputBackground: hsl(288,100%,10%);
    --inputBorder: hsla(288, 100%, 26%, 0.8);
    --inputText: hsl(288, 100%, 92%);

    --labelColor: hsl(288, 100%,88%);
  } */
  }

  .dark {
    --headingColor: radial-gradient(
    circle farthest-corner at left center,
    hsl(195, 100%, 90%) -100%,
    hsl(225, 100%, 90%) 50%
  );
    --textColor:  hsl(225, 100%, 93%);

    --backgroundColor: hsl(225, 100%, 12%);
    background: var(--backgroundColor);
    --projectsBackgroundColor: hsl(225, 100%, 15%);

    --inputBackground: hsl(225,100%,10%);
    --inputBorder: hsla(225, 100%, 26%, 0.8);
    --inputText: hsl(225, 100%, 92%);

    --labelColor: hsl(225, 100%,88%);
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  
html::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Epilogue', sans-serif;
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
