import { RequestError } from '@octokit/request-error'

/**
 * @file Global Fixture - RequestError
 * @module tests/fixtures/request-error
 */

export default new RequestError('Oops', 500, {
  headers: {
    'x-github-request-id': '1:2:3:4'
  },
  request: {
    body: { bar: 'baz' },
    headers: { authorization: 'token secret123' },
    method: 'POST',
    url: 'https://api.github.com/foo'
  }
})
