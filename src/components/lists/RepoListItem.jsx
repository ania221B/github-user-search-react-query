import { checkLongUnbrokenText } from '../../utils'

function RepoListItem ({ item }) {
  const { name, url, description, language, stars, forks } = item
  const isNameLongUnbroken = checkLongUnbrokenText(name)
  const isDescriptionLongUnbroken = checkLongUnbrokenText(description)
  return (
    <li className='repo-list__item br-medium'>
      <article className='repo'>
        <h4 className={isNameLongUnbroken ? 'force-link-wrap' : undefined}>
          <a href={url}>{name}</a>
        </h4>
        <p
          className={isDescriptionLongUnbroken ? 'force-text-wrap' : undefined}
        >
          {description}
        </p>
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
