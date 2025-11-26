/**
 * Checks if text contains no spaces and its length is more than 25 characters (long string)
 * @param {String} text
 * @returns Boolean True if text is long and unbroken, false otherwise
 */

function checkLongUnbrokenText (text) {
  return text && !text.includes(' ') && text.length > 25
}

export default checkLongUnbrokenText
