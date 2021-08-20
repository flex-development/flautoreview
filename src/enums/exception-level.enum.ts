/**
 * @file Enums - ExceptionLevel
 * @module autoreview/enums/ExceptionLevel
 */

/**
 * GitHub Actions [log levels][1] and [annotations][2] used by exceptions.
 *
 * [1]: https://github.com/actions/toolkit/tree/main/packages/core#logging
 * [2]: https://github.com/actions/toolkit/tree/main/packages/core#annotations
 */
export enum ExceptionLevel {
  ERROR = 'error',
  INFO = 'info',
  NOTICE = 'notice',
  WARN = 'warning'
}
