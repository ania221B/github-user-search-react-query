import { api } from './axiosInstance'

export async function fetchUser (username) {
  const { data } = await api.get(`users/${username}`)
  return data
}

export async function searchUsers (query) {
  const { data } = await api.get(
    `/search/users?q=${query}+in:name+in:login&per_page=10`
  )
  return data.items
}
