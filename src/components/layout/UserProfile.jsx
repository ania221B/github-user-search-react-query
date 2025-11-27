import { checkLongUnbrokenText } from '../../utils'

function UserProfile ({ image, name, username, joinDate, bio }) {
  const isLongUnbroken = checkLongUnbrokenText(bio)
  return (
    <header className='user-card__overview__header profile-card'>
      <div className='profile-card__img'>
        <img src={image} alt={name} className='br-circle' />
      </div>
      <h2 className='profile-card__title fs-900 fw-bold'>
        {name ? name : username}
      </h2>
      <p className='profile-card__name'>@{username}</p>
      <p className='profile-card__date'>
        Joined <span>{joinDate ? joinDate : `Not Available`}</span>
      </p>
      {bio ? (
        <p
          className={`profile-card__bio ${
            isLongUnbroken ? 'force-wrap-text' : undefined
          }`}
        >
          {' '}
          {bio}
        </p>
      ) : (
        <p className='profile-card__bio no-info'>This profile has no bio</p>
      )}
    </header>
  )
}
export default UserProfile
