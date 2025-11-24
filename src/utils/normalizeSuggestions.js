/**
 * Normalizes suggestion data fetched from the api
 * @param {Object} data Object with suggestion data fetch from the api
 * @returns Object with normalized suggestion data from the api
 */
function normalizeSuggestions (items) {
  if (!Array.isArray(items)) return []
  return items.map(item => {
    return {
      id: Number.isFinite(item.id) ? item.id : 0,
      image: typeof item?.avatar_url === 'string' ? item.avatar_url : '',
      username: typeof item?.login === 'string' ? item.login : ''
    }
  })
}

export default normalizeSuggestions
