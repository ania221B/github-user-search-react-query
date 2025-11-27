function UserSkeleton () {
  return (
    <div className='card-skeleton'>
      <div className='user-card__header  profile-card'>
        <div className='card-skeleton__img profile-card__img'></div>

        <div className='card-skeleton__user-info'></div>
        <div className='card-skeleton__user-info card-skeleton__user-info--small'></div>
        <div className='card-skeleton__user-info'></div>
        <div className='card-skeleton__user-info'></div>
      </div>

      <div className='card-skeleton__stats'></div>

      <div className='card-skeleton__links'>
        <div className='card-skeleton__link'></div>
        <div className='card-skeleton__link'></div>
        <div className='card-skeleton__link'></div>
        <div className='card-skeleton__link'></div>
      </div>
    </div>
  )
}

export default UserSkeleton
