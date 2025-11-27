import { useGlobalContext } from '../../context'
import { useEffect, useRef, useState } from 'react'
import { UserRepos, UserOverview } from '../layout'
import useUserProfile from '../../hooks/useUserProfile'

function UserCard () {
  const { user, activeTab, setSearchError } = useGlobalContext()
  const [cardHeight, setCardHeight] = useState(0)
  const [lastValidUser, setLastValidUser] = useState(null)
  const { data: userProfile, isPending, error } = useUserProfile(user)
  const displayUser = userProfile || lastValidUser || {}
  const cardRef = useRef(null)

  useEffect(() => {
    if (userProfile) setLastValidUser(userProfile)
  }, [userProfile])

  useEffect(() => {
    if (error) {
      setSearchError(error.status === 404 ? 'No results' : 'Error!')
    }
  }, [error])

  useEffect(() => {
    if (!cardRef.current || !displayUser) return

    function updateHeight (entries) {
      const { height } = entries[0].contentRect
      if (activeTab === 'overview' || cardHeight === 0) {
        setCardHeight(height)
      }
    }

    const observer = new ResizeObserver(updateHeight)
    observer.observe(cardRef.current)

    return () => {
      observer.disconnect()
    }
  }, [activeTab, displayUser])

  return (
    <article className='user-card br-medium' ref={cardRef}>
      {activeTab === 'overview' ? (
        <UserOverview user={displayUser} loading={isPending}></UserOverview>
      ) : (
        <UserRepos user={displayUser.username} height={cardHeight}></UserRepos>
      )}
    </article>
  )
}
export default UserCard
