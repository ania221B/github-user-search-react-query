import { useQuery } from '@tanstack/react-query'
import { normalizeUser } from '../utils'
import { fetchUser } from '../api'

function useUserProfile (username) {
  const { data, isPending, error } = useQuery({
    queryKey: ['user', username],
    queryFn: () => fetchUser(username),
    select: normalizeUser,
    enabled: !!username
  })
  return { data, isPending, error }
}
export default useUserProfile
