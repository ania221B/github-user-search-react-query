function SortingMenu ({ sortBy, setSortBy, order, setOrder }) {
  return (
    <div className='flow margin-block-start-16'>
      <div className='sorting-menu'>
        <label htmlFor='repo-sorting' className='repo__label'>
          Sort:
        </label>
        <div className='select-menu-wrapper'>
          <select
            name='repo-sorting'
            value={sortBy}
            id='repo-sorting'
            onChange={e => setSortBy(e.target.value)}
            className='select-menu repo__select'
          >
            <option value='stars'>Stars</option>
            <option value='forks'>Forks</option>
          </select>
          <div className='select-menu-wrapper__arrow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-chevron-down-icon lucide-chevron-down'
            >
              <path d='m6 9 6 6 6-6' />
            </svg>
          </div>
        </div>
      </div>

      <div className='order-menu'>
        <label htmlFor='repo-order' className='repo__label'>
          Order:
        </label>
        <div className='select-menu-wrapper'>
          <select
            name='repo-order'
            value={order}
            id='repo-order'
            onChange={e => setOrder(e.target.value)}
            className='select-menu repo__select'
          >
            <option value='desc'>A-Z</option>
            <option value='asc'>Z-A</option>
          </select>

          <div className='select-menu-wrapper__arrow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-chevron-down-icon lucide-chevron-down'
            >
              <path d='m6 9 6 6 6-6' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SortingMenu
