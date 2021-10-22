import * as React from 'react'

export const LanguageContext = React.createContext({})

export const LangProvider = ({ children }) => {
  const langUser =
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem('lang'))

  const [lang, setLangue] = React.useState('FR')

  React.useEffect(() => {
    if (localStorage.getItem('lang')) {
      setLangue(langUser)
    }
  }, [langUser])

  const updateLanguage = (language) => {
    setLangue(language)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', JSON.stringify(language))
    }
  }

  const provider = { lang, updateLanguage }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}
