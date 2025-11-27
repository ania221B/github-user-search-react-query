import SuggestionItem from './SuggestionItem'

function SuggestionList ({ suggestions, isLoading, isError }) {
  if (isError) {
    return (
      <div className='suggestion-list-wrapper'>
        <h2>Can't get suggestions.</h2>
      </div>
    )
  }

  if (suggestions.length === 0) {
    return (
      <div className='suggestion-list-wrapper'>
        <h2 className='suggestion-list'>No suggestions available.</h2>
      </div>
    )
  }

  return (
    <div className='suggestion-list-wrapper'>
      <ul className='suggestion-list' role='list'>
        {suggestions.map(suggestion => {
          return (
            <SuggestionItem
              suggestion={suggestion}
              isLoading={isLoading}
              key={suggestion.id}
            ></SuggestionItem>
          )
        })}
      </ul>
    </div>
  )
}

export default SuggestionList
