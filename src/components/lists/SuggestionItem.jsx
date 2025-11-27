import { useGlobalContext } from '../../context'
import { ItemSkeleton } from '../ui'

function SuggestionItem ({ suggestion, isLoading }) {
  const { setUser } = useGlobalContext()

  if (isLoading) {
    return <ItemSkeleton></ItemSkeleton>
  }

  return (
    <li
      className='suggestion-list__item'
      onClick={_ => setUser(suggestion.username)}
      role='option'
    >
      <article>
        <div className='suggestion-list__item__img'>
          <img
            src={suggestion.image}
            alt={suggestion.username}
            className='br-circle'
          />
        </div>
        <h2 className='suggestion-list__item__name'>{suggestion.username}</h2>
      </article>
    </li>
  )
}
export default SuggestionItem
