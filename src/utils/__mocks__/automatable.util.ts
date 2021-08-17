/**
 * @file User Module Mock - automatable
 * @module utils/mocks/automatable
 * @see https://jestjs.io/docs/manual-mocks#mocking-user-modules
 */

export default jest.fn((...args) => {
  return jest.requireActual('../automatable.util').default(...args)
})
