import RepoListItem from './RepoListItem'

function RepoList ({ repos }) {
  if (!repos.length === 0) {
    return (
      <div className='repo-list'>
        <h4 className='fs-900'>No repos available</h4>
      </div>
    )
  }
  return (
    <ul className='repo-list grid-auto-fit' role='list'>
      {repos.map(repo => {
        return <RepoListItem item={repo}></RepoListItem>
      })}
    </ul>
  )
}

export default RepoList
