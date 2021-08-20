/**
 * @file Enums - ReviewEvent
 * @module flautoreview/enums/ReviewEvent
 */

/**
 * Pull request review actions.
 *
 * @see https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request--parameters
 */
export enum ReviewEvent {
  APPROVE = 'APPROVE',
  COMMENT = 'COMMENT',
  REQUEST_CHANGES = 'REQUEST_CHANGES'
}
