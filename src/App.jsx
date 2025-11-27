import { useEffect } from 'react'
import { Header, UserCard } from './components/layout'
import { SearchBar, TabButtons } from './components/ui'
import { useGlobalContext } from './context'

function App () {
  const { setPreferredTheme, enableDarkMode, enableLightMode, mediaQuery } =
    useGlobalContext()
  useEffect(() => {
    setPreferredTheme()

    function listenForChange (e) {
      if (!localStorage.getItem('theme')) {
        e.matches ? enableDarkMode() : enableLightMode()
      }
    }
    mediaQuery.addEventListener('change', listenForChange)
    return () => mediaQuery.removeEventListener('change', listenForChange)
  }, [])
  return (
    <main>
      <section className='section'>
        <div className='container flow'>
          <Header></Header>
          <SearchBar></SearchBar>
          <UserCard></UserCard>
          <TabButtons></TabButtons>
        </div>
      </section>
    </main>
  )
}

export default App
