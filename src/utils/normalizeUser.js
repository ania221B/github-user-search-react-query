import formatDate from './formatDate'

/**
 * Normalizes user data fetched from the api
 * @param {Object} data Object with user data fetch from the api
 * @returns Object with normalized user data from the api
 */
function normalizeUser (data) {
  if (!data) return {}

  return {
    image: typeof data?.avatar_url === 'string' ? data.avatar_url : '',
    name: typeof data?.name === 'string' ? data.name : '',
    username: typeof data?.login === 'string' ? data.login : '',
    joinDate:
      typeof data?.created_at === 'string' ? formatDate(data.created_at) : '',
    bio: typeof data?.bio === 'string' ? data.bio : '',
    repos: Number.isFinite(data?.public_repos) ? data.public_repos : 0,
    followers: Number.isFinite(data?.followers) ? data.followers : 0,
    following: Number.isFinite(data?.following) ? data.following : 0,
    location: typeof data?.location === 'string' ? data.location : '',
    blog: typeof data?.blog === 'string' ? data.blog : '',
    twitter:
      typeof data?.twitter_username === 'string' ? data.twitter_username : '',
    company: typeof data?.company === 'string' ? data.company : ''
  }
}

export default normalizeUser
