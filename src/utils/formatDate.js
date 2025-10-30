/**
 * Formats the date
 * @param {String} date a date string
 * @returns String with date in DD MMM YYYY format
 */
function formatDate (date) {
  const monthsInAYear = [
    { longName: 'January', shortName: 'Jan' },
    { longName: 'February', shortName: 'Feb' },
    { longName: 'March', shortName: 'Mar' },
    { longName: 'April', shortName: 'Apr' },
    { longName: 'May', shortName: 'May' },
    { longName: 'June', shortName: 'Jun' },
    { longName: 'July', shortName: 'Jul' },
    { longName: 'August', shortName: 'Aug' },
    { longName: 'September', shortName: 'Sep' },
    { longName: 'October', shortName: 'Oct' },
    { longName: 'November', shortName: 'Nov' },
    { longName: 'December', shortName: 'Dec' }
  ]
  const unformattedDate = new Date(date)
  const year = unformattedDate.getFullYear()
  const month = monthsInAYear[unformattedDate.getMonth()].shortName
  const day = unformattedDate.getDate()

  return `${day} ${month} ${year}`
}

export default formatDate
