function ReposSkeleton () {
  return (
    <div className='card-skeleton'>
      <div className='card-skeleton__header'></div>
      <div className='card-skeleton__sorting-menus flow'>
        <div className='card-skeleton__sorting-menus__item'></div>
        <div className='card-skeleton__sorting-menus__item'></div>
      </div>
      <div className='card-skeleton__repo-list'></div>
    </div>
  )
}

export default ReposSkeleton
