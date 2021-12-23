import * as React from 'react'
import { useState, useEffect, useMemo, useCallback } from 'react'
import useSound from 'use-sound'

export const ThemeContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},
})

const DARK_MODE_ITEM = 'tbn-portfolio-darkmode'

export const ThemeProvider = ({ children }) => {
  const localStorageDarkMode =
    typeof window !== 'undefined' &&
    JSON.parse(localStorage.getItem(DARK_MODE_ITEM))

  const [darkMode, setDarkMode] = useState(false)
  const [playbackRate] = useState(1)
  const [play] = useSound('/sounds/Pop.mp3', { volume: 0.5, playbackRate })

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
    let darkVar = !darkMode
    if (darkVar) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }

    localStorage.setItem(DARK_MODE_ITEM, JSON.stringify(darkVar))
    setDarkMode(darkVar)
    play()
  }, [darkMode, play])

  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
    }),
    [darkMode, toggleDarkMode]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
