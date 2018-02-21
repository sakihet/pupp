const buildURL = (urlString) => {
  if (!urlString.match(/^https?\:\/\//)) {
    return `https://${urlString}`
  }
  return urlString
}
module.exports = buildURL
