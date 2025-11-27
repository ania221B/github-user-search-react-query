function UserStats ({ repos, followers, following }) {
  return (
    <dl className='user-card__overview__stats stats-card br-small'>
      <dt className='fs-200'>Repos</dt>
      <dd className='fs-800 fw-bold'>{repos}</dd>

      <dt className='fs-200'>Followers</dt>
      <dd className='fs-800 fw-bold'>{followers}</dd>

      <dt className='fs-200'>Following</dt>
      <dd className='fs-800 fw-bold'>{following}</dd>
    </dl>
  )
}
export default UserStats
