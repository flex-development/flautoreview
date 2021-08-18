/**
 * @file Node Module Mock - @actions/github
 * @module mocks/actions/github
 * @see https://jestjs.io/docs/manual-mocks#mocking-node-modules
 * @see https://github.com/actions/toolkit/tree/main/packages/github
 */

export default {
  context: { repo: { owner: 'flex-development', repo: 'autoreview' } },
  getOctokit: jest.fn().mockReturnValue({
    rest: { pulls: { createReview: jest.fn() } }
  })
}
