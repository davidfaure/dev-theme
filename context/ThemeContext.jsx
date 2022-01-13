import * as React from 'react'
import { useState, useEffect, useMemo, useCallback } from 'react'

export const ThemeContext = React.createContext({
  darkmode: false,
  toggleDarkMode: () => {},
})

const DARK_MODE_ITEM = 'tbn-portfolio-darkmode'

export const ThemeProvider = ({ children }) => {
  const localStorageDarkMode =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem(DARK_MODE_ITEM))

  const [darkmode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(DARK_MODE_ITEM)) {
      setDarkMode(localStorageDarkMode)
      if (localStorageDarkMode) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    }
  }, [localStorageDarkMode])

  const toggleDarkMode = useCallback(() => {
    let darkVar = !darkmode
    if (darkVar) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    localStorage.setItem(DARK_MODE_ITEM, JSON.stringify(darkVar))
    setDarkMode(darkVar)
  }, [darkmode])

  const value = useMemo(
    () => ({
      darkmode,
      toggleDarkMode,
    }),
    [darkmode, toggleDarkMode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
