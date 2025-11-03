function RepoListItem ({ item }) {
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
          <dd className='fs-300 fw-bold'>{language ? language : 'No info'}</dd>

          <dt>Stars</dt>
          <dd className='fs-300 fw-bold'>{stars}</dd>

          <dt>Forks</dt>
          <dd className='fs-300 fw-bold'>{forks}</dd>
        </dl>
      </article>
    </li>
  )
}

export default RepoListItem
