/**
 * @file User Module Mock - createReview
 * @module utils/mocks/createReview
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../create-review.util').default(...args)
})
