import { useGlobalContext } from '../context'

function TabButtons () {
  const { activeTab, setActiveTab } = useGlobalContext()

  function displayOverview () {
    setActiveTab('overview')
  }
  function displayRepos () {
    setActiveTab('repos')
  }
  return (
    <div className='button-container br-small'>
      <button
        type='button'
        className={activeTab === 'overview' ? 'button active' : 'button'}
        onClick={displayOverview}
      >
        Overview
      </button>

      <button
        type='button'
        className={activeTab === 'repos' ? 'button active' : 'button'}
        onClick={displayRepos}
      >
        Repos
      </button>
    </div>
  )
}
export default TabButtons
