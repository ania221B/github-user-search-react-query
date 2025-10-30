import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

function AppContext ({ children }) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(mediaQuery.matches)
  const [user, setUser] = useState('octocat')
  const [searchError, setSearchError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  /**
   * Enables dark mode and stores info about mode selection
   */
  function enableDarkMode () {
    setIsDarkMode(true)
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')
    localStorage.setItem('theme', 'dark')
  }

  /**
   * Enables light mode and stores info about mode selection
   */
  function enableLightMode () {
    setIsDarkMode(false)
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')
    localStorage.setItem('theme', 'light')
  }

  /**
   * Sets the theme based on user preference
   */
  function setPreferredTheme () {
    const storedTheme = localStorage.getItem('theme')

    if (!storedTheme) {
      mediaQuery.matches ? enableDarkMode() : enableLightMode()
    } else if (storedTheme === 'dark') {
      enableDarkMode()
    } else {
      enableLightMode()
    }
  }

  /**
   * Switches between available themes
   */
  function toggleTheme () {
    const currentTheme = localStorage.getItem('theme')
    currentTheme === 'dark' ? enableLightMode() : enableDarkMode()
  }

  return (
    <GlobalContext.Provider
      value={{
        mediaQuery,
        user,
        setUser,
        searchError,
        setSearchError,
        enableDarkMode,
        enableLightMode,
        setPreferredTheme,
        toggleTheme,
        isDarkMode,
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
