import '@fontsource/epilogue/400.css'
import '@fontsource/epilogue/500.css'
import '@fontsource/epilogue/700.css'

import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import { LangProvider } from '../context/LanguageContext'

import { ThemeProvider } from '../context/ThemeContext'

import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </LangProvider>
    </ThemeProvider>
  )
}

export default MyApp
