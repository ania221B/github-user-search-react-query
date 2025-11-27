function UserInfoItem ({ icon, label, content, href }) {
  const hasContent = Boolean(content)

  return (
    <>
      <dd aria-label={label} className={!hasContent ? 'no-info' : undefined}>
        {icon}
      </dd>
      <dt className={!hasContent ? 'no-info' : undefined}>
        {hasContent ? (
          href ? (
            <a
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='force-link-wrap'
            >
              {content}
            </a>
          ) : (
            <p>{content}</p>
          )
        ) : (
          <p>Not Available</p>
        )}
      </dt>
    </>
  )
}
export default UserInfoItem
