import { BlogIcon, CompanyIcon, LocationIcon, TwitterIcon } from '../icons'
import UserInfoItem from './UserInfoItem'

function UserInfo ({ location, blog, twitter, company }) {
  function companyToGitHubLink (companyRaw) {
    if (!companyRaw) return null
    let companyLink = companyRaw.trim()
    if (companyLink.startsWith('@')) {
      companyLink = companyLink.substring(1)
    }
    const normalized = companyLink.toLowerCase().replace(/\s+/g, '-')
    if (!/^[a-z0-9-]{1,39}$/.test(normalized)) {
      return null
    }
    return `https://github.com/${normalized}`
  }

  const companyLink = companyToGitHubLink(company)
  return (
    <dl className='user-card__overview__links user-links'>
      <UserInfoItem
        icon={<LocationIcon></LocationIcon>}
        label='location'
        content={location}
      ></UserInfoItem>

      <UserInfoItem
        icon={<BlogIcon></BlogIcon>}
        label='blog'
        content={blog}
        href={blog}
      ></UserInfoItem>

      <UserInfoItem
        icon={<TwitterIcon></TwitterIcon>}
        label='twitter'
        content={twitter}
        href={`https://twitter.com/${twitter}`}
      ></UserInfoItem>

      <UserInfoItem
        icon={<CompanyIcon></CompanyIcon>}
        label='company'
        content={company}
        href={companyLink}
      ></UserInfoItem>
    </dl>
  )
}
export default UserInfo
