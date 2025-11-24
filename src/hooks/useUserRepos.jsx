import { useQuery } from '@tanstack/react-query'
import { fetchRepos } from '../api'
import { normalizeRepos } from '../utils'

function useUserRepos (username, sortBy = 'stars', order = 'desc') {
  const { data, isPending, error } = useQuery({
    queryKey: ['repos', username, sortBy, order],
    queryFn: () => fetchRepos(username, sortBy, order),
    select: normalizeRepos,
    enabled: !!username,
    retry: false
  })
  return { data, isPending, error }
}
export default useUserRepos
