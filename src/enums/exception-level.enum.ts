/**
 * @file Enums - ExceptionLevel
 * @module autoreview/enums/ExceptionLevel
 */

/**
 * GitHub Actions [log levels][1].
 *
 * [1]: https://github.com/actions/toolkit/tree/main/packages/core#annotations
 */
export enum ExceptionLevel {
  ERROR = 'error',
  INFO = 'notice',
  WARN = 'warning'
}
