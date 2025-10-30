import { useQuery } from '@tanstack/react-query'
import { normalizeSuggestions } from '../utils'
import { useEffect, useState } from 'react'
import { searchUsers } from '../api'

function useDebounce (value, delay = 300) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}

function useUserSearch (searchInput) {
  const debounced = useDebounce(searchInput)
  const { data, isPending, error } = useQuery({
    queryKey: ['searchedUser', debounced],
    queryFn: () => searchUsers(debounced),
    select: normalizeSuggestions,
    enabled: searchInput.trim().length > 0
  })

  return { data, isPending, error }
}
export default useUserSearch
