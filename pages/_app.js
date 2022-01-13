// import '@fontsource/epilogue/400.css'
// import '@fontsource/epilogue/500.css'
// import '@fontsource/epilogue/700.css'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'

import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'

import { ThemeProvider } from '../context/ThemeContext'

import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
