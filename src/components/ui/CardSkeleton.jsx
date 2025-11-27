import { ReposSkeleton, UserSkeleton } from '../ui'

function CardSkeleton ({ activeTab }) {
  if (activeTab === 'repos') {
    return (
      <div className='card-skeleton user-card user-card__repos br-medium'>
        <ReposSkeleton></ReposSkeleton>
      </div>
    )
  }

  return (
    <div className='card-skeleton user-card br-medium'>
      <UserSkeleton></UserSkeleton>
    </div>
  )
}

export default CardSkeleton
