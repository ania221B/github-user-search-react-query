import { useGlobalContext } from '../context'
import { MoonIcon, SunIcon } from '../icons'

function Header () {
  const { toggleTheme, isDarkMode } = useGlobalContext()
  return (
    <header className='primary-header flex-row space-between'>
      <h1 className='main-title'>devfinder</h1>
      <div className='theme-toggle'>
        {isDarkMode ? (
          <button
            className='button toggle-button'
            onClick={toggleTheme}
            aria-label='switch to light theme'
          >
            <span>light</span>
            <SunIcon aria-hidden='true'></SunIcon>
          </button>
        ) : (
          <button
            className='button toggle-button'
            onClick={toggleTheme}
            aria-label='switch to dark theme'
          >
            <span>dark</span>
            <MoonIcon aria-hidden='true'></MoonIcon>
          </button>
        )}
      </div>
    </header>
  )
}
export default Header
