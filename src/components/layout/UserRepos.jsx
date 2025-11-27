import { useEffect, useState } from 'react'
import useUserRepos from '../../hooks/useUserRepos'
import { SortingMenu } from '../data'
import { ReposSkeleton } from '../ui'
import { RepoList } from '../lists'
import { useGlobalContext } from '../../context'

function UserRepos ({ user, height }) {
  const [sortBy, setSortBy] = useState('stars')
  const [order, setOrder] = useState('desc')
  const { setSearchError } = useGlobalContext()
  const [lastValidRepos, setLastValidRepos] = useState(null)
  const { data: repos, isPending, error } = useUserRepos(user, sortBy, order)

  useEffect(() => {
    if (repos) setLastValidRepos(repos)
  }, [repos])

  useEffect(() => {
    if (error) {
      setSearchError(error.status === 404 ? 'No results' : 'Error!')
    }
  }, [error])

  if (isPending) {
    return (
      <div
        className='card-skeleton'
        style={{ '--card-content-height': `${height}px` }}
      >
        <ReposSkeleton></ReposSkeleton>
      </div>
    )
  }
  const displayRepos = repos || lastValidRepos || []

  return (
    <section
      className='user-card__repos'
      style={{ '--card-content-height': `${height}px` }}
    >
      <h3>Top 10 Repos</h3>

      <SortingMenu
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      ></SortingMenu>

      <RepoList repos={displayRepos}></RepoList>
    </section>
  )
}
export default UserRepos
