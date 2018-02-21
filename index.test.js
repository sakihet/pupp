const buildURL = require('./buildURL');

test('buildURL should return URL', () => {
  expect(buildURL('example.com')).toBe('https://example.com')
  expect(buildURL('http://example.com')).toBe('http://example.com')
  expect(buildURL('https://example.com')).toBe('https://example.com')
})
