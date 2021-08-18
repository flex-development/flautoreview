import type { ObjectPlain } from '@flex-development/tutils'
import type { PullRequestReviewRequestedEvent } from '@octokit/webhooks-types'

/**
 * @file Utility - getRequested
 * @module autoreview/utils/getRequested
 */

/**
 * Returns the user login or team slug of a pull request's requested reviewer.
 *
 * @param {PullRequestReviewRequestedEvent} payload - Webhook payload event
 * @return {string} User login or team slug
 */
const getRequested = (payload: PullRequestReviewRequestedEvent): string => {
  const { requested_reviewer, requested_team } = payload as ObjectPlain
  return requested_reviewer?.login ?? requested_team?.slug
}

export default getRequested
