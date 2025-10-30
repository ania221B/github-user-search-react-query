import { useState } from 'react'
import { useGlobalContext } from '../context'
import useUserRepos from '../hooks/useUserRepos'
import SortingMenu from './SortingMenu'

function UserRepos () {
  const [sortBy, setSortBy] = useState('stars')
  const [order, setOrder] = useState('desc')
  const { user } = useGlobalContext()
  const { data: repos, isPending, error } = useUserRepos(user, sortBy, order)

  if (isPending) {
    return <h2>loading...</h2>
  }
  if (error) {
    console.log(error)
  }

  if (!repos) {
    return <h3>No repos available</h3>
  }

  return (
    <>
      <h3>Top 10 Repos</h3>

      <SortingMenu
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
      ></SortingMenu>

      <ul className='repo-list grid-auto-fit' role='list'>
        {repos.map(item => {
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
    </>
  )
}
export default UserRepos
