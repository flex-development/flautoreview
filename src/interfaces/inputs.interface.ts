import { ReviewEvent } from '@autoreview/enums/review-event.enum'

/**
 * @file Interfaces - Inputs
 * @module autoreview/interfaces/Inputs
 */

/**
 * Action options.
 *
 * @see https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
export interface Inputs {
  /**
   * Body text of pull request review. **Required** if:
   *
   * - `event === ReviewEvent.COMMENT`
   * - `event === ReviewEvent.REQUEST_CHANGES`.
   */
  body?: string

  /**
   * Automated review action to perform.
   *
   * @default ReviewEvent.APPROVE
   */
  event?: ReviewEvent

  /**
   * List of user logins and/or team slugs to automate reviews on behalf of;
   * e.g: `'flexdevelopment,dependabot'`.
   *
   * @default ''
   */
  reviewers?: string

  /**
   * List of users allowed to receive automated reviews e.g: `'unicornware'`.
   */
  senders?: string
}
