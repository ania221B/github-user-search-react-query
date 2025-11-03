import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import useUserRepos from '../hooks/useUserRepos'
import SortingMenu from './SortingMenu'
import ReposSkeleton from './ReposSkeleton'

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
      setSearchError(
        error.status === 404 ? 'No user found' : 'There was an error'
      )
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

  if (!displayRepos) {
    return (
      <section
        className='user-card__empty'
        style={{ '--card-content-height': `${height}px` }}
      >
        <h3 className='fs-900'>No repos available</h3>
      </section>
    )
  }

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

      <ul className='repo-list grid-auto-fit' role='list'>
        {displayRepos.map(item => {
          const { id, name, url, description, language, stars, forks } = item
          return (
            <li className='repo-list__item br-medium' key={id}>
              <article className='repo'>
                <h4>
                  <a href={url}>{name}</a>
                </h4>
                <p className='force-link-wrap'>{description}</p>
                <dl className='repo-list__stats stats-card'>
                  <dt>Language</dt>
                  <dd className='fs-300 fw-bold'>
                    {language ? language : 'No info'}
                  </dd>

                  <dt>Stars</dt>
                  <dd className='fs-300 fw-bold'>{stars}</dd>

                  <dt>Forks</dt>
                  <dd className='fs-300 fw-bold'>{forks}</dd>
                </dl>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default UserRepos
