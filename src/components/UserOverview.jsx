import UserInfo from './UserInfo'
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import UserSkeleton from './UserSkeleton'

function UserOverview ({ user, loading }) {
  if (loading) {
    return <UserSkeleton></UserSkeleton>
  }

  if (!user) {
    return (
      <section className='user-card__overview'>
        <h3 className='fs-900'>No user data available</h3>
      </section>
    )
  }

  return (
    <section className='user-card__overview'>
      <UserProfile {...user}></UserProfile>
      <UserStats {...user}></UserStats>
      <UserInfo {...user}></UserInfo>
    </section>
  )
}

export default UserOverview
