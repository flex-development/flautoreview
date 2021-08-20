/**
 * @file User Module Mock - getRequested
 * @module utils/mocks/getRequested
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../get-requested.util').default(...args)
})
