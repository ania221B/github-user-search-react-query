import { useGlobalContext } from '../context'
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import UserInfo from './UserInfo'
import { useEffect, useRef, useState } from 'react'
import CardSkeleton from './CardSkeleton'
import useUserProfile from '../hooks/useUserProfile'
import UserRepos from './UserRepos'

function UserCard () {
  const { user, setSearchError, activeTab } = useGlobalContext()
  const [lastValidUser, setLastValidUser] = useState(null)
  const { data: userProfile, isPending, error } = useUserProfile(user)
  const [cardContentHeight, setCardContentHeight] = useState(0)
  const cardContentRef = useRef(null)

  useEffect(() => {
    if (userProfile) setLastValidUser(userProfile)
  }, [userProfile])

  useEffect(() => {
    if (error) {
      setSearchError(
        error.status === 404 ? 'No user found' : 'There was an error'
      )
    }
  }, [error])

  useEffect(() => {
    if (!cardContentRef.current) return

    function updateHeight (entries) {
      const { height } = entries[0].contentRect
      setCardContentHeight(height)
    }

    const observer = new ResizeObserver(updateHeight)
    observer.observe(cardContentRef.current)

    return () => observer.disconnect()
  }, [userProfile, activeTab])

  if (isPending) {
    return <CardSkeleton></CardSkeleton>
  }

  if (error) {
    return (
      <article className='user-card br-medium'>
        {activeTab === 'overview' ? (
          <section className='user-card__overview' ref={cardContentRef}>
            <UserProfile {...lastValidUser}></UserProfile>
            <UserStats {...lastValidUser}></UserStats>
            <UserInfo {...lastValidUser}></UserInfo>
          </section>
        ) : (
          <section className='user-card__repos'>
            <UserRepos></UserRepos>
          </section>
        )}
      </article>
    )
  }

  console.log(cardContentHeight)
  return (
    <article className='user-card br-medium'>
      {activeTab === 'overview' ? (
        <section className='user-card__overview' ref={cardContentRef}>
          <UserProfile {...userProfile}></UserProfile>
          <UserStats {...userProfile}></UserStats>
          <UserInfo {...userProfile}></UserInfo>
        </section>
      ) : (
        <section
          className='user-card__repos'
          style={{ '--card-content-height': `${cardContentHeight}px` }}
        >
          <UserRepos></UserRepos>
        </section>
      )}
    </article>
  )
}
export default UserCard
