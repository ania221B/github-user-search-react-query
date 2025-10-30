import { api } from './axiosInstance'

export async function fetchRepos (username, sortBy, order) {
  const { data } = await api.get(
    `/search/repositories?q=user:${username}&sort=${sortBy}&order=${order}&per_page=10`
  )
  return data.items
}
