/**
 * @file Node Module Mock - @actions/core
 * @module mocks/actions/core
 * @see https://jestjs.io/docs/manual-mocks#mocking-node-modules
 * @see https://github.com/actions/toolkit/tree/main/packages/core
 */

export const error = jest.fn()
export const getInput = jest.fn()
export const getMultilineInput = jest.fn()
export const setFailed = jest.fn()
export const warning = jest.fn()
