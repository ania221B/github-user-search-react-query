import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { SearchIcon } from '../icons'
import SuggestionList from './SuggestionList'
import useUserSearch from '../hooks/useUserSearch'

function SearchBar () {
  const { setUser, searchError, setSearchError } = useGlobalContext()
  const [searchedUser, setSearchedUser] = useState('')
  const { data: suggestions, isPending, error } = useUserSearch(searchedUser)
  const shortPlaceholderText = 'Search...'
  const longPlaceholderText = 'Search GitHub username...'
  const [placeholderText, setPlaceholderText] = useState(shortPlaceholderText)

  function handleSubmit (e) {
    e.preventDefault()
    setSearchError('')
    if (!searchedUser) {
      setSearchError('Type a username to search')
      return
    }

    setUser(searchedUser.trim())
  }

  useEffect(() => {
    function updatePlaceholderText (e) {
      if (window.innerWidth < 375) {
        setPlaceholderText(shortPlaceholderText)
      } else {
        setPlaceholderText(longPlaceholderText)
      }
    }
    window.addEventListener('resize', updatePlaceholderText)
    return () => window.removeEventListener('resize', updatePlaceholderText)
  }, [])

  return (
    <search>
      <form onSubmit={handleSubmit}>
        <div
          className={
            searchError ? 'search-bar br-medium error' : 'search-bar br-medium'
          }
        >
          <div className='icon' aria-hidden='true'>
            <SearchIcon></SearchIcon>
          </div>
          <label htmlFor='username' className='sr-only'>
            Enter GitHub username to find
          </label>
          <input
            type='search'
            name='search'
            id='search-input'
            value={searchedUser}
            placeholder={placeholderText}
            onChange={e => {
              setSearchError('')
              setSearchedUser(e.target.value)
            }}
          />
          {searchError && <div className='info'>{searchError}</div>}
          <button type='submit' className='button search-button'>
            Search
          </button>

          {suggestions && (
            <SuggestionList
              suggestions={suggestions}
              isLoading={isPending}
              isError={error}
            ></SuggestionList>
          )}
        </div>
      </form>
    </search>
  )
}
export default SearchBar
