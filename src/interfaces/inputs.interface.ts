import { ReviewEvent } from '@flautoreview/enums/review-event.enum'

/**
 * @file Interfaces - Inputs
 * @module flautoreview/interfaces/Inputs
 */

/**
 * Action options.
 *
 * @see https://docs.github.com/actions/creating-actions/metadata-syntax-for-github-actions#inputs
 */
export interface Inputs {
  /**
   * Body text of pull request review.
   *
   * **Required** if:
   *
   * - `event === ReviewEvent.COMMENT`
   * - `event === ReviewEvent.REQUEST_CHANGES`
   */
  body?: string[]

  /**
   * Automated review action to perform.
   *
   * @default ReviewEvent.APPROVE
   */
  event?: ReviewEvent

  /**
   * List of user logins and/or team slugs to automate reviews on behalf of;
   * e.g: `'flexdevelopment,team-flautoreview'`.
   *
   * If `undefined` or an empty string, a warning will be logged and the action
   * will exit without failing.
   */
  reviewers?: string

  /**
   * List of users allowed to receive automated reviews; e.g: `'unicornware'`.
   *
   * If an empty string, a warning will be logged and the action will exit
   * without failing.
   */
  senders?: string

  /**
   * GitHub [Personal Access Token][1] with repository access.
   *
   * Using `github.token`, the default `token` value, will result in the
   * [`github-actions`][2] bot submitting reviews instead of the user or team
   * listed in `reviewers`.
   *
   * [1]: https://github.com/settings/tokens/new
   * [2]: https://github.com/features/actions
   *
   * @default '${{ github.token }}'
   */
  token: string
}
